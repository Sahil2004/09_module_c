"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import "./modal.css";

export default function Modal({
  open,
  dialogHandler,
}: {
  open: boolean;
  dialogHandler: Dispatch<SetStateAction<boolean>>;
}) {
  const dialog = useRef<HTMLDialogElement | null>(null);
  const [value, setValue] = useState("Lake Restoration")
  function changeHandler() {
  }
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
  }, [open]);
  function closeModal() {
    dialogHandler(false);
  }
  const thank = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (thank.current) thank.current.style.display = "none";
  }, []);
  function form() {}
  return (
    <dialog ref={dialog} className="p-10 max-w-[400px] rounded-xl">
      <h1 className="text-2xl">Want to join the initiatives?</h1>
      <article
        className="flex items-center flex-col justify-center"
        ref={thank}
      >
        <h2>Thank you for joining the initiative.</h2>
        <p>You will recieve a mail shortly</p>
      </article>
      <form onSubmit={form}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="tel"
          name="number"
          id="number"
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="area"
          id="area"
          placeholder="Area (inside Agra)"
        />
        <select name="type" id="type" value={value} onChange={changeHandler}>
          <option value="Lake Restoration">
            Lake Restoration
          </option>
          <option value="Urban Forestry">Urban Forestry</option>
          <option value="Waste Management">Waste Management</option>
        </select>
        <span className="flex gap-4">
          <input type="submit" value="Join" />
          <button onClick={closeModal}>Close</button>
        </span>
      </form>
    </dialog>
  );
}
