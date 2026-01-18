// HTML tags like <p>, <strong>, <em> are supported.
// Teaching philosophy
const teachingPhilosophy = `
    <p> I try to make clear how equations, data, and models are used to describe real physical systems in Earth and Planetary Sciences, often through project-based work that lets students explore these ideas in practice.</p>
    <p> Because the field is inherently interdisciplinary, students come in with different levels of quantitative preparation. I see this heterogeneity as a strength, especially in project-driven settings where students learn from each other’s approaches. I focus on building shared foundations while supporting those who are newer to tools such as statistics or numerical modeling, so everyone can engage more comfortably with unfamiliar problems, both in and beyond the classroom.</p>
`;

const teaching = [
    {
        role: "Teaching Assistant",
        title: "Weather and Climate Laboratory",
        code: "12.307",
        university: "Massachusetts Institute of Technology",
        term: "Spring 2025",
        description: `<p> I supported a hands-on course taught by Prof. <a href="https://oceans.mit.edu/JohnMarshall/" target="_blank" rel="noopener noreferrer">John Marshall</a> and Dr. <a href="https://taliatamarin.wixsite.com/taliatamarin/" target="_blank" rel="noopener noreferrer">Talia Tamarin-Brodsky</a> that combines theory with rotating tank experiments to study atmospheric and oceanic circulation. Much of my role involved working alongside students during lab sessions, helping with experimental setup, instrumentation, and data analysis, and discussing how the lab results connect to ideas from geophysical fluid dynamics.</p>
        <p> One of the students in this course, <a href="https://yolandgao.com/" target="_blank" rel="noopener noreferrer">Youran (Yoland) Gao</a>, developed a particle-tracking tool to follow surface tracers in video recordings of the experiments for his final project. We pursued this further after the course ended, working together through regular brainstorming sessions, discussing design choices and analysis approaches. Yoland led the implementation, and I provided input on the overall structure and functionality. We plan to open-source the software after a few more iterations. </p>
        <p> 
        <p>Over Summer–Fall 2025, I worked with John on updating the rotating tank setup and improving the hardware. The updated system will be used in the next iteration of the course.</p>

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
        description: `
        <p> I served as the teaching assistant for a graduate-level course on mathematical methods in scientific modeling, taught by Prof. <a href="https://en.earth.huji.ac.il/people/nathan-paldor">Nathan Paldor</a>. I worked with students during problem-solving sessions, helping them navigate unfamiliar mathematical tools and address gaps in quantitative preparation. I also developed and expanded the lecture notes with step-by-step derivations and intuitive explanations to make key methods easier to follow and apply. The notes are available below.</p>
        `,
        resources: [
            { label: "Lecture Notes", url: "pdfs/lecture_notes_mmism.pdf", icon: "far fa-file-pdf" }
            // { label: "Problem Sets", url: "#", icon: "fas fa-pencil-alt" }
        ]
    }
];