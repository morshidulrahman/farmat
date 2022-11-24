import React, { useState } from 'react'
import * as Yup from "yup"
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'
import { AppForm, FormBtn, FormDropdown, FormInput } from '../shared/from';
import { showNotification } from '@mantine/notifications';
import { db } from '../../configs/firebase';
import { LoadingOverlay } from '@mantine/core';
const COUNTRIES = [
    { title: "United States" }, { title: "United Kingdom" }, { title: "Canada" }, { title: "Australia" }, { title: "Bangladesh" }, { title: "France" }, { title: "Italy" }, { title: "Spain" }, { title: "Netherlands" }, { title: "Belgium" }, { title: "Austria" }, { title: "Switzerland" }, { title: "Sweden" }, { title: "Norway" }, { title: "Denmark" }, { title: "Finland" }, { title: "Ireland" }, { title: "New Zealand" }, { title: "Japan" }, { title: "China" }, { title: "Hong Kong" }, { title: "Singapore" }, { title: "India" }, { title: "Brazil" }, { title: "Mexico" }, { title: "Argentina" }, { title: "Chile" }, { title: "Colombia" }, { title: "Peru" }, { title: "Venezuela" }, { title: "South Africa" }, { title: "Egypt" }, { title: "Western" }
]

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

})


const AddressForm = () => {
    const user = useSelector(selectUser)
    const [loading, setLoading] = useState(false)

    const updateAddress = async (values) => {
        setLoading(true)
        await db.collection('users').doc(user?.uid).set({
            billings_info: { ...values }
        }, { merge: true })
            .then(() => {
                showNotification({ title: "Updated successfully", message: 'Address information 0Updated successfully' })
            })
            .catch((error) => {
                showNotification({ title: "Failed", message: 'Something went wrong', color: 'red', })
                console.log(error)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div>
            <LoadingOverlay visible={loading} />
            <h1 className="text-center text-3xl mb-5 font-bold">Update Billing Address</h1>
            <AppForm
                initialValues={{
                    first_name: user?.billings_info?.first_name || '',
                    last_name: user?.billings_info?.last_name || '',
                    company: user?.billings_info?.company || '',
                    address: user?.billings_info?.address || '',
                    email: user?.billings_info?.email || '',
                    phone: user?.billings_info?.phone || '',
                    city: user?.billings_info?.city || '',
                    state: user?.billings_info?.state || '',
                    zip: user?.billings_info?.zip || '',
                    country: user?.billings_info?.country || '',
                }}
                onSubmit={updateAddress}
                validationSchema={validationSchema}
            >
                <FormInput
                    name="first_name"
                    placeholder="First name"
                />
                <FormInput
                    name="last_name"
                    placeholder="Last name"
                />
                <FormInput
                    name="company"
                    placeholder="Company name (optional)"
                />
                <FormDropdown
                    name="country"
                    placeholder="Country / Region"
                    items={COUNTRIES}
                />
                <FormInput
                    name="address"
                    placeholder="Street address"
                />
                <FormInput
                    name="city"
                    placeholder="Town / City"
                />
                <FormInput
                    name="state"
                    placeholder="State / Province"
                />
                <FormInput
                    name="zip"
                    placeholder="ZIP / Postal code"
                />
                <FormInput
                    name="phone"
                    placeholder="Phone"
                />
                <FormInput
                    name="email"
                    placeholder="Email address"
                    type="email"
                />
                <FormBtn
                    title="Update"
                    loading={loading}
                />
            </AppForm>
        </div>
    )
}

export default AddressForm