import { useState, useEffect, useRef } from "react";
import { useForm } from "@formspree/react";

const empty = { name: "", email: "", message: "" };

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) errors.email = "Enter a valid email address.";
  if (!v.message.trim()) errors.message = "Write a message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sentTo, setSentTo] = useState("");
  const [state, send] = useForm("mdekqkpv");
  const lastName = useRef("");

  // Show the success message and clear the form once Formspree accepts it
  useEffect(() => {
    if (state.result) {
      setSentTo(lastName.current);
      setValues(empty);
    }
  }, [state.result]);

  const serverMsg = (name) =>
    state.errors?.getFieldErrors(name).map((x) => x.message).join(" ") || "";
  const formMsg = state.errors?.getFormErrors().map((x) => x.message).join(" ") || "";

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  // Validate first, then send to Formspree
  const onSubmit = (e) => {
    e.preventDefault();
    setSentTo("");
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    lastName.current = values.name.trim();
    send(values);
  };

  const field = (name, label, props = {}, Tag = "input") => {
    const msg = errors[name] || serverMsg(name);
    return (
    <>
      <label htmlFor={name}>{label}</label>
      <Tag
        id={name}
        name={name}
        value={values[name]}
        onChange={onChange}
        className={msg ? "invalid" : ""}
        aria-invalid={Boolean(msg)}
        {...props}
      />
      <span className="error">{msg}</span>
    </>
    );
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-wrap">
        <form onSubmit={onSubmit} noValidate>
          {field("name", "Name", { type: "text", autoComplete: "name" })}
          {field("email", "Email", { type: "email", autoComplete: "email" })}
          {field("message", "Message", { rows: 5 }, "textarea")}
          {formMsg && <p className="error">{formMsg}</p>}
          <button className="btn primary" type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send message"}
          </button>
          {sentTo && <p className="success" role="status">Thanks, {sentTo}. Your message was sent.</p>}
        </form>

        <aside className="links">
          <p>Prefer to reach out directly?</p>
          <ul>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <a href="mailto:rinax.antonio@lsu.edu.ph">rinax.antonio@lsu.edu.ph</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              <a href="https://linkedin.com/in/rinax-antonio" target="_blank" rel="noopener noreferrer">linkedin.com/in/rinax-antonio</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              <a href="https://github.com/mynameisrinax" target="_blank" rel="noopener noreferrer">github.com/mynameisrinax</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
