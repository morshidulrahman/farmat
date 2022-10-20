import React from 'react'
import Bilinginfo from "./Bilinginfo"
import YourOrder from "./YourOrder"
import AppForm from "../shared/from/AppForm"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    first_name: Yup.string().max(25).required().label('First Name'),
    last_name: Yup.string().max(25).required().label('Last Name'),
    company: Yup.string().label('Company'),
    address: Yup.string().max(25).required().label('Address'),
    email: Yup.string().email().required().label('Email'),
    phone: Yup.string().required().label('Phone'),
    city: Yup.string().required().label('City'),
    state: Yup.string().required().label('State / province'),
    zip: Yup.string().required().label('Zip / postal code'),
    country: Yup.string().required().label('Country'),
    notes: Yup.string().max(400).required().label('Notes'),
})
function CheckoutContent() {
    const placeholder = (values) => {
        console.log(values)
    }
    return (
        <div className='flex flex-wrap md:flex-nowrap gap-5'>
            <AppForm
                initialValues={{
                    first_name: '',
                    last_name: '',
                    company: '',
                    address: '',
                    email: '',
                    phone: '',
                    city: '',
                    state: '',
                    zip: '',
                    country: '',
                    notes: ''
                }}
                validationSchema={validationSchema}
                onSubmit={placeholder}
            >
                <div className='w-full md:w-[60%]'>
                    <h3 className="text-2xl mb-4">Billing details</h3>
                    <Bilinginfo />
                </div>
                <div className='w-full md:w-[40%]'>
                    <YourOrder placeholder={placeholder} />
                </div>
            </AppForm>

        </div>
    )
}

export default CheckoutContent