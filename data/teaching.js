// HTML tags like <p>, <strong>, <em> are supported.
// Teaching philosophy
const teachingPhilosophy = `
    <p>
    I enjoy teaching science through doing it. Whether in the lab or working with data and models, I focus on helping students connect equations and theory to physical intuition and real systems in Earth and Planetary Sciences (EPS).
    </p>
    <p>
    Students arrive to EPS with different strengths and levels of quantitative preparation, especially in interdisciplinary fields like oceanography and planetary science. I see this heterogeneity as an advantage! My aim is to build shared foundations while supporting students who may be newer to tools like statistics or numerical models, so they can engage confidently with unfamiliar problems.
    </p>
`;

const teaching = [
    {
        role: "Teaching Assistant",
        title: "Weather and Climate Laboratory",
        code: "12.307",
        university: "Massachusetts Institute of Technology",
        term: "Spring 2025",
        description: `<p> I supported a hands-on course taught by <a href="https://oceans.mit.edu/JohnMarshall/"  class="academic-link">John Marshall</a> and <a href="https://taliatamarin.wixsite.com/taliatamarin/" class="academic-link">Talia Tamarin-Brodsky</a> that combines theory with rotating tank experiments to study atmospheric and oceanic circulation. Much of my role involved working alongside students during lab sessions, helping with experimental setup, instrumentation, and data analysis, and discussing how the lab results connect to ideas from geophysical fluid dynamics.</p>
        <p> One of the students in this course, Youran (Yoland) Gao, developed a particle-tracking tool to follow surface tracers in video recordings of the experiments for his final project. We pursued this further after the course ended, working together through regular brainstorming sessions, discussing design choices and analysis approaches. Yoland led the implementation, and I provided input on the overall structure and functionality. A link to the tracker is provided below. </p>
        <p> Through the Summer-Fall of 2025, I also worked with John on updating the rotating tank setup, helping improve the hardware as well. The updated system will be used in the next iteration of the course.</p>

        <!-- Example of 3 images in a row using the new .img-row class 
                      <p class="mb-2 font-semibold text-sm text-slate-500">Board work from Fall 2020:</p>
                      <div class="img-row">
                          <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80" alt="Board 1" />
                          <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=400&q=80" alt="Board 2" />
                          <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80" alt="Board 3" />
                      </div>
                      <p class="text-sm text-slate-500 dark:text-slate-400 italic mt-1">Figure 1: Examples of stability analysis derivations.</p> -->
        `,

        resources: [
            {label: "Course Website", url: "https://weathertank.mit.edu/", icon: "fas fa-external-link-alt" },
            // { label: "Syllabus", url: "#", icon: "far fa-file-pdf" },
            // { label: "Notes", url: "#", icon: "far fa-file-alt" }
        ]
    },
    {
        role: "Teaching Assistant",
        title: "Mathematical Methods In Scientific Models",
        code: "82833",
        university: "Hebrew University of Jerusalem",
        term: "Fall 2020",
        description: "<p>Assisted with instruction and problem-solving sessions for a graduate-level course covering mathematical tools used in scientific modeling. Provided support to students with varied quantitative backgrounds through intutive explanations. Developed and expanded lecture notes with step-by-step derivations and intuitive explanations to clarify key methods and bridge gaps in mathematical preparation.</p>",
        resources: [
            { label: "Lecture Notes", url: "pdfs/lecture_notes_mmism.pdf", icon: "far fa-file-pdf" }
            // { label: "Problem Sets", url: "#", icon: "fas fa-pencil-alt" }
        ]
    }
];