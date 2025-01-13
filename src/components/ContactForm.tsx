'use client'

import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

import FormGroup from '@/components/ui/FormGroup'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Textarea from '@/components/ui/Textarea'

interface FormData {
    name: string
    email: string
    phone: string
    message: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        toast.success('Wiadomość wysłana pomyślnie!', {
            position: 'bottom-right',
        })

        reset()
    })

    return (
        <>
            <form onSubmit={onSubmit}>
                <FormGroup error={errors.name}>
                    <Input
                        {...register('name', {
                            required: 'Imię i nazwisko są wymagane',
                        })}
                        placeholder="Imię i nazwisko*"
                    />
                </FormGroup>
                <FormGroup error={errors.email}>
                    <Input
                        {...register('email', {
                            required: 'Email jest wymagany',
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Wprowadź poprawny adres email',
                            },
                        })}
                        placeholder="Adres email*"
                    />
                </FormGroup>
                <FormGroup error={errors.phone}>
                    <Input
                        {...register('phone', {
                            pattern: {
                                value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                                message: 'Wprowadź poprawny numer telefonu',
                            },
                        })}
                        placeholder="Numer telefonu"
                    />
                </FormGroup>
                <FormGroup error={errors.message}>
                    <Textarea
                        {...register('message', {
                            required: 'Twoja wiadomość jest wymagana',
                            maxLength: {
                                value: 150,
                                message: 'Przekroczono limit znaków: 150',
                            },
                        })}
                        placeholder="Twoja wiadomość*"
                    />
                </FormGroup>

                <Button>Wyślij wiadomość</Button>
            </form>

            <Toaster />
        </>
    )
}
