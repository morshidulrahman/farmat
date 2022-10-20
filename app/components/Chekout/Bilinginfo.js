import React from 'react'
import { FormInput, FormDropdown } from '../shared/from'

const COUNTRIES = [
    { title: "United States" }, { title: "United Kingdom" }, { title: "Canada" }, { title: "Australia" }, { title: "Bangladesh" }, { title: "France" }, { title: "Italy" }, { title: "Spain" }, { title: "Netherlands" }, { title: "Belgium" }, { title: "Austria" }, { title: "Switzerland" }, { title: "Sweden" }, { title: "Norway" }, { title: "Denmark" }, { title: "Finland" }, { title: "Ireland" }, { title: "New Zealand" }, { title: "Japan" }, { title: "China" }, { title: "Hong Kong" }, { title: "Singapore" }, { title: "India" }, { title: "Brazil" }, { title: "Mexico" }, { title: "Argentina" }, { title: "Chile" }, { title: "Colombia" }, { title: "Peru" }, { title: "Venezuela" }, { title: "South Africa" }, { title: "Egypt" }, { title: "Western" }
]

function Bilinginfo() {

    return (
        <div>
            <FormInput
                name="first_name"
                placeholder="First Name"
            />
            <FormInput
                name="last_name"
                placeholder="Last Name"
            />
            <FormInput
                name="company"
                placeholder="Company"
            />
            <FormDropdown
                name="country"
                placeholder="Country / Region"
                items={COUNTRIES}
            />
            <FormInput
                name="address"
                placeholder="Street Address"
            />
            <FormInput
                name="city"
                placeholder="City"
            />
            <FormInput
                name="state"
                placeholder="State / province" />
            <FormInput
                name="zip"
                placeholder="Zip / postal code"
            />
            <FormInput
                name="phone"
                placeholder="Phone"
            />
            <FormInput
                name="email"
                placeholder="Email"
            />
            <FormInput
                name="notes"
                placeholder="Order Notes (optional)"
            />

        </div>
    )
}

export default Bilinginfo