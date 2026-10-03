"use server"

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 125
 * Topic: Server Actions in Next.js
 * File: form.js
 * 
 * Description:
 *   Handling form submissions and backend mutations directly on the server without manual API routes.
 * ==========================================================================
 */
import fs from "fs/promises"
export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("harry.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`) 

  }