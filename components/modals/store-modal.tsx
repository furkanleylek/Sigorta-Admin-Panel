'use client'
import React, { useState } from 'react'
import { useDashboardContext } from '../context'
import axios from 'axios'

import { Modal } from '../ui/modal'

import * as z from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { toast } from 'react-hot-toast'

const formScheme = z.object({
    name: z.string().min(1),
})

const StoreModal = () => {

    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            name: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formScheme>) => {
        try {
            setLoading(true)

            const response = await axios.post('/api/stores', values);

            toast.success('Store created')
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
        console.log(values)

    }

    return (
        <Modal
            title='Create Store'
            description='Add a new store to manage producsts and categories'
            isOpen={false} onClose={() => { }}
        >
            Future Create Store Form
            <div>
                <div className='space-y-4 py-2 pb-4'>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder='E-Commerce'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                            <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
                                <Button
                                    disabled={loading}
                                    variant="outline"
                                    onClick={() => { }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    disabled={loading}
                                    type='submit'
                                >
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}

export default StoreModal