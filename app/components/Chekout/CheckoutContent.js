import React, { useState } from 'react'
import Bilinginfo from "./Bilinginfo"
import YourOrder from "./YourOrder"
import AppForm from "../shared/from/AppForm"
import * as Yup from "yup"
import Checkoutlayout from '../../layout/Checkoutlayout'
import { db } from '../../configs/firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'

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
    const user = useSelector(selectUser)
    const [loading, setloading] = useState(false)

    const placeholder = async (values) => {
        setloading(true)
        await savingfromdata(values)
        setloading(false)
    }

    const savingfromdata = async (values) => {

        return db.collection("users").doc(user?.uid).set({
            billings_info: values,
        }, { merge: true })

    }

    return (
        <Checkoutlayout>
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
                        <YourOrder placeholder={placeholder} loading={loading} />
                    </div>
                </AppForm>

            </div>
        </Checkoutlayout>
    )
}

export default CheckoutContent