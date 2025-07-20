'use server'
import { auth } from "@clerk/nextjs/server"
import { create } from "domain";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId } = await auth();
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from("companions")
        .insert({
            ...formData,
            author: userId,
        })
        .select();
    console.log((await auth()).getToken() +""+userId +""+ (await auth()))
    
    if(error || !data) throw new Error(error?.message || 'Failed to create a companion');
    return data[0]
}