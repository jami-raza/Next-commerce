"use client"
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import PhoneInput from 'react-phone-number-input'
import ReactFlagsSelect from "react-flags-select";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { zodResolver } from "@hookform/resolvers/zod"
  import * as z from "zod"
   
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMemo, useState } from "react";
  import {Select as Select1} from '@radix-ui/react-select'
//     <form className=" m-2 p-4 bg-white rounded-lg shadow-xl">
//                 <h1 className="text-2xl text-center font-bold mb-2">CHECK OUT</h1>
//     <p className="text-gray-800 font-medium">Customer information</p>
//     <FormItem>
//     <div className="mt-2">
//         <FormLabel>
//         First Name
//       {/* <label className="block text-sm text-gray-600" htmlFor="">First Name</label> */}
//         </FormLabel>
//       <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="" name="" type="text" placeholder="First Name" aria-label="Name"/>
//     </div>
//     <div className="mt-2">
//       <label className="block text-sm text-gray-600" htmlFor="">Last Name</label>
//       <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="" name="" type="text" placeholder="Last Name" aria-label="Name"/>
//     </div>
//     <div className="mt-2">
//       <label className="block text-sm text-gray-600" htmlFor="">Email</label>
//       <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="" name="" type="email" placeholder="Your Email" aria-label="Email"/>
//     </div>
//     <div className="mt-2">
//       <label className=" block text-sm text-gray-600" htmlFor="">Address</label>
//       <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="" name="" type="text" placeholder="Street" aria-label="Email"/>
//     </div>
//     <Select>

//     <div className="mt-2">
//       <label className="hidden text-sm block text-gray-600" htmlFor="">City</label>
      
//       <SelectTrigger className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">
   
//       <SelectValue  placeholder="City" />
    
     
//   </SelectTrigger>
//   <SelectContent>
//     <SelectItem value="light">Sindh</SelectItem>
//     <SelectItem value="dark">Punjab</SelectItem>
//     <SelectItem value="system">Blochistan</SelectItem>
//     <SelectItem value="system">KPK</SelectItem>
//   </SelectContent>

    
//     </div>
//     </Select>
   
//     <div className="inline-block mt-2 w-1/2 pr-1">
//       <label className="hidden block text-sm text-gray-600" htmlFor="">Country</label>
//       <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="" name="" type="text" placeholder="Country" aria-label="Email"/>
//     </div>
//     <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
//       <label className="hidden block text-sm text-gray-600" htmlFor="">Zip</label>
//       <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id=""  name="" type="text" placeholder="Zip" aria-label="Email"/>
//     </div>
//     <div className="mt-2">
//       <label className="hidden text-sm block text-gray-600" htmlFor="">Phone</label>
//       <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="" name="" type="number" placeholder="Phone" aria-label="Email"/>
//     </div>
//     </FormItem>
//     <p className="mt-4 text-gray-800 font-medium">Payment information</p>
//     <div className="">
//       <label className="block text-sm text-gray-600" htmlFor="">Card</label>
//       <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="" name="" type="text" placeholder="Card Number MM/YY CVC" aria-label="Name"/>
//     </div>
//     <div className="mt-8">
//       <Button className="w-full text-lg" type="submit">Proceed To Payment</Button>
//       <Link href="/cart" passHref className="flex font-semibold text-indigo-600 text-sm mt-5">
      
//       <svg className="mr-2" fill="#3949AB" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 483.1 483.1" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6 c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3 C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1 c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"></path> </g> </g></svg>
//           Back to my Bag
//         </Link>
//     </div>
//     </form>
  
export default function Checkout(){
  const [phoneValue, setPhoneValue] = useState<any>()

  const [selected, setSelected] = useState("");

    const formSchema = z.object({
        username: z.string().min(2, {
          message: "must be at least 2 characters.",
        }),
        email: z.string().min(2, {
          message: "must be at least 2 characters.",
        }),
        address: z.string().min(5, {
          message: "must be at least 5 characters.",
        }),
        city: z.string().min(2, {
          message: "must be at least 2 characters.",
        }),
        // country: z.string().min(2, {
        //   message: "must be at least 2 characters.",
        // }),
        // phone: z.string().min(2,{
        //   message: "Fill this field",
        // }),
        zipCode: z.string().optional(),
      })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          email: "",
          address: "",
          city: "",
          // country: "",
          // phone: "",
          zipCode: "",

        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    
    const cart = useAppSelector((state) => state.cartReducer);
    const totalLength = cart.products.length
    
    return(
        <div className="w-full gap-2.5 flex bg-gray-200 max-[768px]:flex-col">
            {/* Shipping-Detail-Form */}
            <div className="p-4  leading-loose max-w-[100%] w-2/4 max-[768px]:w-full m-2 p-4 bg-white rounded-lg shadow-xl">
    <Form {...form}>
      <h1 className="text-2xl  font-bold mb-6">Check out</h1>
      <h2 className="text-xl  font-bold mb-2">Shipping details</h2>
    
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />

        
        <FormField
         control={form.control}
         name="email"
         render={({ field }) => (
          <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
              )}
        />
        <FormField
         control={form.control}
         name="address"
         render={({ field }) => (
          <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
              )}
        />
        <FormField
         control={form.control}
         name="city"
         render={({ field }) => (
          <FormItem>
              <FormLabel>City</FormLabel>
              
              <FormControl>
              <Input type="text" placeholder="City" {...field}/>
             
               
              </FormControl>
              <FormMessage />
              </FormItem>
              )}
        />
        {/* <ReactFlagsSelect
    selected={selected}
    onSelect={(code) => setSelected(code)}
    
  /> */}
        <FormField
         control={form.control}
         name="zipCode"
         render={({ field }) => (
          <FormItem>
              <FormLabel>Zip code</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Zip code" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
              )}
        />
        {/* <FormField
         control={form.control}
         name="phone"
         render={({ field }) => (
          <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
              
              </FormControl>
              <FormMessage />
              </FormItem>
              )}
        /> */}

{/* <PhoneInput
      placeholder="Enter phone number"
      value={phoneValue}
      onChange={(e) => setPhoneValue(e)}/> */}
       
        <Button type="submit">Submit</Button>
        <div className="w-fit">
      
     <Link href="/cart" passHref className="flex font-semibold text-indigo-600 text-sm mt-5">
      
      <svg className="mr-2" fill="#3949AB" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 483.1 483.1" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6 c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3 C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1 c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"></path> </g> </g></svg>
          Back to my Bag
       </Link>
    </div>
      </form>
    </Form>
</div>
            {/* Order-Summary */}
          
            <div className="p-4 max-w-full w-2/5 max-[768px]:w-full">
            <div className="m-2 p-4 bg-white rounded-lg shadow-xl">
        <h1 className="font-bold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-5">
          <span className="font-semibold text-sm uppercase">Total Items </span>
          <span className="font-semibold text-sm">{totalLength}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-sm uppercase">Total Charges</span>
          <span className="font-semibold text-sm">Rs {cart.finalTotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-sm uppercase">Shipping Charges</span>
          <span className="font-semibold text-sm">Rs 0</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-sm uppercase">Sub Total</span>
          <span className="font-semibold text-sm">Rs {cart.finalTotal}</span>
        </div>
        
        
      
        <div className="border-t mt-8">
          <div className="flex font-bold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>Rs {cart.finalTotal}</span>
          </div>
         
    
       
        </div>
      </div>
        </div>
       
        </div>
      

    )
}