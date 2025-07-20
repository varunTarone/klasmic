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

export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
    const supabase = createSupabaseClient();

    let query = supabase.from('companions').select();

    if(subject && topic) {
        query = query.ilike('subject', `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if(subject) {
        query = query.ilike('subject', `%${subject}%`)
    } else if(topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }

    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: companions, error } = await query;

    if(error) throw new Error(error.message);

    return companions;
}
