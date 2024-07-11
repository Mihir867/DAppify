"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "../../utils/cn";
import { Auth } from "@supabase/auth-ui-react";

import supabase from "@/app/api/Auth";
import { ThemeSupa } from "@supabase/auth-ui-shared";


export default function SignupFormDemo() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <div className="max-w-md w-full mx-auto mt-20 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Sign In
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="bot@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 relative">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            className="absolute right-2 top-6 text-gray-600 dark:text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IconEyeOff /> : <IconEye />}
          </button>
        </LabelInputContainer>

        <button
          className="bg-black relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign In &rarr;
          <BottomGradient />
        </button>

        

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex justify-between">
          <Link href="/signup" className="text-md text-blue-500 hover:underline">
            Go to Signup Page
          </Link>
          <Link href="/forgot-password" className="text-md text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </form>
      <div className="auth mt-4 border-none">
      <Auth
  supabaseClient={supabase}
  providers={['google', 'github']}
  appearance={{ theme: ThemeSupa }}
  theme="dark"
  
  queryParams={{
    access_type: 'offline',
    prompt: 'consent',
  }}
  onlyThirdPartyProviders
/>


        </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
