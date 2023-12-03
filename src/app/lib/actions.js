// "use server";
// import { signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createInvoice(formData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: Number(formData.get("amount")),
    status: formData.get("status"),
  };
  const { customerId, amount, status } = rawFormData;
  // Test it out:
  const amountInCents = amount * 100;

  const date = new Date().toISOString().split("T")[0];
  console.log(date);

  console.log(rawFormData);
  console.log(typeof rawFormData.amount);

 try{
   await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

 }
catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

}
export async function updateInvoice(id,formData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: Number(formData.get("amount")),
    status: formData.get("status"),
  };
  const { customerId, amount, status } = rawFormData;
  // Test it out:
  const amountInCents = amount * 100;

  const date = new Date().toISOString().split("T")[0];
  console.log(date);

  console.log(rawFormData);
  console.log(typeof rawFormData.amount);

 try {
   await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
 } catch (error) {
   return {
     message: "Database Error: Failed to Update Invoice.",
   };
 }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteInvoice(id) {
  throw new Error("Failed to Delete Invoice");
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
    return { message: "Deleted Invoice." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice." };
  }
}

export async function authenticate(
  prevState,
  formData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error ).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}