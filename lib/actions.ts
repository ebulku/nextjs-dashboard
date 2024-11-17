'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import prisma from './prisma'
import {
  CreateInvoiceSchema,
  CreateNoteSchema,
  CreateOrderSchema,
} from './forms'
import { z } from 'zod'
import { put } from '@vercel/blob'

export type State = {
  errors?: {
    customerId?: string[]
    amount?: string[]
    status?: string[]
  }
  message?: string | null
}

export type AddNoteState = {
  errors?: {
    body?: string[]
  }
  success: boolean
  message: string
}

export async function createInvoice(
  prevState: State,
  formData: z.infer<typeof CreateInvoiceSchema>
) {
  const validatedFields = CreateInvoiceSchema.safeParse({
    customerId: formData.customerId,
    amount: formData.amount,
    status: formData.status,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    }
  }

  const { customerId, amount, status } = validatedFields.data
  const amountInCents = amount * 100

  try {
    await prisma.invoice.create({
      data: {
        customerId,
        amount: amountInCents,
        status,
      },
    })
  } catch (error) {
    return { message: 'Database Error: Failed to create invoice.' }
  }

  // Test it out:
  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: z.infer<typeof CreateInvoiceSchema>
) {
  const validatedFields = CreateInvoiceSchema.safeParse({
    customerId: formData.customerId,
    amount: formData.amount,
    status: formData.status,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    }
  }

  const { customerId, amount, status } = validatedFields.data
  const amountInCents = amount * 100

  try {
    await prisma.invoice.update({
      where: {
        id,
      },
      data: {
        customerId,
        amount: amountInCents,
        status,
      },
    })
  } catch (error) {
    return { message: 'Database Error: Failed to update invoice.' }
  }

  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function deleteInvoice(id: string) {
  try {
    await prisma.invoice.delete({ where: { id: id } })
  } catch (error) {
    return { message: 'Database Error: Failed to delete invoice.' }
  }
  revalidatePath('/dashboard/invoices')
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  let errorOccurred = false

  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      errorOccurred = true
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  } finally {
    if (!errorOccurred) {
      redirect('/dashboard')
    }
  }
}

export async function createOrder(
  prevState: State,
  formData: z.infer<typeof CreateOrderSchema>
) {
  const validatedFields = CreateOrderSchema.safeParse({
    customerId: formData.customerId,
    amount: formData.amount,
    status: formData.status,
    title: formData.title,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    }
  }

  const { customerId, amount, status, title } = validatedFields.data
  const amountInCents = amount * 100

  try {
    await prisma.order.create({
      data: {
        customerId,
        title,
        amount: amountInCents,
        status,
      },
    })
  } catch (error) {
    return { message: 'Database Error: Failed to create invoice.' }
  }

  revalidatePath('/dashboard/orders')
  redirect('/dashboard/orders')
}

export async function updateOrder(
  id: string,
  prevState: State,
  formData: z.infer<typeof CreateOrderSchema>
) {
  const validatedFields = CreateOrderSchema.safeParse({
    customerId: formData.customerId,
    amount: formData.amount,
    status: formData.status,
    title: formData.title,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    }
  }

  const { customerId, amount, status, title } = validatedFields.data
  const amountInCents = amount * 100

  try {
    await prisma.order.update({
      where: {
        id: id,
      },
      data: {
        customerId,
        amount: amountInCents,
        title,
        status,
      },
    })
  } catch (error) {
    return { message: 'Database Error: Failed to update invoice.' }
  }

  revalidatePath(`/dashboard/orders/${id}`)
  redirect(`/dashboard/orders/${id}`)
}

export async function deleteOrder(id: string) {
  console.log('Deleting order with id:', id)
  try {
    await prisma.order.delete({ where: { id: id } })
  } catch (error) {
    console.log(error)
    return { message: 'Database Error: Failed to delete order.' }
  }
  revalidatePath('/dashboard/orders')
}

export async function addNoteToOrder(
  orderId: string,
  prevState: AddNoteState,
  formData: z.infer<typeof CreateNoteSchema>
) {
  const validatedFields = CreateNoteSchema.safeParse({
    body: formData.body,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: 'Missing Fields. Failed to Add Note.',
    }
  }

  const { body } = validatedFields.data

  try {
    await prisma.note.create({
      data: {
        orderId,
        body,
      },
    })

    revalidatePath(`/dashboard/orders/${orderId}`)

    return { success: true, message: 'Note Added.' }
  } catch (error) {
    return {
      success: false,
      message: 'Database Error: Failed to add note.',
    }
  }
}

export async function addFileToOrder(
  orderId: string,
  prevState: AddNoteState,
  formData: FormData
) {
  try {
    const imageFile = formData.get('image') as File
    const blob = await put(imageFile.name, imageFile, {
      access: 'public',
    })

    await prisma.file.create({
      data: {
        orderId,
        url: blob.url,
      },
    })

    console.log('blob:', blob)
    console.log('imageFile:', imageFile)

    revalidatePath(`/dashboard/orders/${orderId}`)
    return {
      message: `${imageFile.name} uploaded`,
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      message: 'Database Error: Failed to add note.',
    }
  }

  // redirect(`/dashboard/orders/${id}`)
}
