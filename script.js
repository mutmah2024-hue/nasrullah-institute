import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDJnm5F-i2eUFVybZ0Aa6SqM22COYw1sNQ",
    authDomain: "nasrullah-63656.firebaseapp.com",
    projectId: "nasrullah-63656",
    storageBucket: "nasrullah-63656.firebasestorage.app",
    messagingSenderId: "1061949236094",
    appId: "1:1061949236094:web:23efe09acbee2706b6092f"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const form = document.getElementById("enroll-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    
    const fullName = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const age = form.querySelector('input[type="number"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const course = document.getElementById("course").value;
    const mode = form.querySelector("select").value;

    try {
      await addDoc(collection(db, "enrollments"), {
        fullName,
        phone,
        age,
        email,
        course,
        mode,
        createdAt: new Date()
      });

      alert("Enrollment submitted successfully. An email or message will be sent to you shortly.");

      form.reset();

    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
  });