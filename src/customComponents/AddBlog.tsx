"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Editor } from "primereact/editor";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(2),
  subtitle: z.string().min(2),
  content: z.string().min(2),
  imageCredit: z.string().min(2),
  image: z.any(),
  category: z.string().min(2),
  author: z.string().min(2),
});

import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";
const AddBlog = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      content: "",
      imageCredit: "",
      category: "",
      author: "",
    },
  });

  const [image, setImage] = useState<File | null>(null);
  const [blogData, setBlogData] = useState<any>();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const date = new Date();
    values.content=blogData
    const formDataToSend = new FormData();
    formDataToSend.append("title", values.title);
    formDataToSend.append("subtitle", values.subtitle);
    formDataToSend.append("content", values.content);
    if (image) {
      console.log(image)
      formDataToSend.append("image", image);
    }
    formDataToSend.append("imageCredit", values.imageCredit);
    formDataToSend.append("author", values.author);
    formDataToSend.append("category", values.category.toUpperCase());
    if (date) formDataToSend.append("date", date.toISOString());

    for (const [key, value] of formDataToSend.entries()) {
      console.log(`${key}: ${value}`);
    }

    console.log(formDataToSend);
    await axios
      .post(
        "https://arka-blogs-backend.onrender.com/api/v1/blog/addblog",
        formDataToSend
      )
      .then((res) => {
        (res);
        toast({
          description: "Blog added successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          description: "An error occurred, please try again",
        });
      });
  }
  return (
    <div className="w-full flex flex-col justify-left  border-black border-2 rounded-ms">
      <div className="text-4xl p-4 pt-serif-bold bg-[#AF0D0D] text-white text-center font-bold">AddBlog</div>
      <div p-6 className="max-w-700px p-4 w-[100vw]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title of the Blog </FormLabel>
                  <FormControl>
                    <Input placeholder="Title goes here" {...field} />
                  </FormControl>
                  <FormDescription>Enter title of your blog</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle of the Blog </FormLabel>
                  <FormControl>
                    <Input placeholder="subtitle goes here" {...field} />
                  </FormControl>
                  <FormDescription>Enter subtitle of your blog</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content of the Blog </FormLabel>
                  <FormControl>
                    <Input placeholder="Content goes here" {...field} />
                  </FormControl>
                  <FormDescription>Enter content of your blog</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hero Image</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Image goes here"
                      type="file"
                      onChange={(e) => {
                        handleChange(e);
                        field.onChange(e); // Ensure the field onChange is called as well
                      }}
                    />
                  </FormControl>
                  <FormDescription>Select the Image</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageCredit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hero Image Credit </FormLabel>
                  <FormControl>
                    <Input placeholder="Image Credit goes here" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please provide the credit information for the image you've
                    uploaded
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog&apos;s Author </FormLabel>
                  <FormControl>
                    <Input placeholder="Title goes here" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter author name of your blog
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category of the Blog </FormLabel>
                  <FormControl>
                    <Input placeholder="Category goes here" {...field} />
                  </FormControl>
                  <FormDescription>Enter category of your blog</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Editor
              value={""}
              onTextChange={(e) => {
                setBlogData(e.htmlValue);
              }}
              style={{ height: "320px" }}
            />

            <Button
              onClick={() => {
                onSubmit(form.getValues());
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
