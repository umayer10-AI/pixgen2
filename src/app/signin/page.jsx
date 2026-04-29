"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()
    const [s,setS] = useState(false)

    const a = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            callbackURL: "/",
        });

        console.log({data,error})

        if(data){
            alert("Data SuccessFully")
        }
        if(error){
            alert(error.message)
        }

    }

    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div>
            <Card className="border mx-auto w-90 lg:w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form onSubmit={handleSubmit(a)} className="flex w-80 lg:w-96 mx-auto flex-col gap-4">


        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email"  {...register("email")}/>
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type={s ? "text":"password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password"  {...register("password")}/>
          <span onClick={() => setS(!s)}>{s? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button className={'bg-linear-to-r from-green-500 via-blue-500 bg-green-500 w-full'} type="submit">
            <Check />
            Submit
          </Button>
        </div>
      </Form>
        <h2 className='text-center font-semibold'>Or</h2>
        <Button onClick={handleGoogle} variant='outline' className={'w-80 lg:w-96 mx-auto shadow'}><FcGoogle />Sign In With Google</Button>
    </Card>
        </div>
    );
};

export default SignInPage;