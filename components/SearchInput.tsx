"use client"
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ramabhadra } from "@/utils/fonts/fonts";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  input: z.string().trim().min(2, "Type at least 2 characters").max(50),
});

export default function SearchInput() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const term = values.input.trim();
    if (!term) return;
    router.push(`/search/${encodeURIComponent(term)}`); 
    form.reset();
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 items-center">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className={`${ramabhadra.className}`}>
                <Input
                    placeholder="Search..."
                    {...field}
                    inputMode="search"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </form>
    </Form>
  )
}