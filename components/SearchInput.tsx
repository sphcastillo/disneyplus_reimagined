"use client"
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ramabhadra } from "@/utils/fonts";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  input: z.string().trim().min(2, "Type at least 2 characters").max(50),
});

export default function SearchInput() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const term = values.input.trim();
    if (!term) return;
    startTransition(() => {
      router.push(`/search/${encodeURIComponent(term)}`);
      form.reset();
    });
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
                <div className={`${ramabhadra.className} relative`}>
                  <Input
                    placeholder="Search..."
                    {...field}
                    inputMode="search"
                    autoComplete="off"
                    spellCheck={false}
                    className="text-base pr-10"
                    disabled={isPending}
                  />
                  {isPending && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" aria-hidden>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </span>
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="min-w-[5.5rem]">
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden />
              <span className="ml-2">Searching...</span>
            </>
          ) : (
            "Search"
          )}
        </Button>
      </form>
    </Form>
  )
}