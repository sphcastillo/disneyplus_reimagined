"use client"
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Ramabhadra } from 'next/font/google';

const ramabhadra = Ramabhadra({ weight: "400", subsets: ['latin'] });


const formSchema = z.object({
  input: z.string().min(2).max(50),
})

function SearchInput() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
 
      // redirect to the page
      router.push(`/search/${values.input}`);
      form.reset();
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className={ramabhadra.className}>
                  <Input placeholder="Search..." {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SearchInput;