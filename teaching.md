layout: default 
title: Teaching 
permalink: /teaching/

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<a href="{{ '/' | relative_url }}" class="mb-8 text-sky-600 dark:text-sky-400 font-medium flex items-center hover:underline transition-colors">
<i class="fas fa-arrow-left mr-2"></i> Back to Home
</a>

<div class="mb-12 border-b border-slate-200 dark:border-slate-700 pb-8">
    <h1 class="text-4xl font-bold font-serif text-slate-900 dark:text-white mb-2">Teaching</h1>
    <p class="text-slate-600 dark:text-slate-400 text-lg">Formal and informal teaching experience.</p>
</div>

<!-- Teaching Philosophy (Written directly here) -->
<div class="mb-12 bg-sky-50 dark:bg-sky-900/10 border-l-4 border-sky-500 p-8 rounded-r-xl">
    <h3 class="text-xl font-bold font-serif text-slate-900 dark:text-white mb-3">Teaching Philosophy</h3>
    <div class="prose-text text-slate-700 dark:text-slate-300">
        <p>I try to make clear how equations, data, and models are used to describe real physical systems in Earth and Planetary Sciences, often through project-based work that lets students explore these ideas in practice.</p>
        <p>Because the field is inherently interdisciplinary, students come in with different levels of quantitative preparation. I see this heterogeneity as a strength, especially in project-driven settings where students learn from each other’s approaches. I focus on building shared foundations while supporting those who are newer to tools such as statistics or numerical modeling, so everyone can engage more comfortably with unfamiliar problems, both in and beyond the classroom.</p>
    </div>
</div>

<!-- Course List (Loops through the _teaching folder) -->
<div class="space-y-8">
    {% assign courses = site.teaching | sort: 'date' | reverse %}
    {% for course in courses %}
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition hover:shadow-md">
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
                <h2 class="text-2xl font-bold font-serif text-slate-900 dark:text-white">{{ course.title }}</h2>
                <div class="flex flex-wrap items-center gap-x-3 text-sm mt-2">
                    <span class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-xs bg-sky-50 dark:bg-sky-900/30 px-2 py-0.5 rounded">{{ course.role }}</span>
                    <span class="text-slate-300 dark:text-slate-600">|</span>
                    {% if course.code %}
                    <span class="font-medium text-slate-700 dark:text-slate-300">{{ course.code }}</span>
                    <span class="text-slate-300 dark:text-slate-600">|</span>
                    {% endif %}
                    <span class="text-slate-500 dark:text-slate-400">{{ course.university }}</span>
                </div>
            </div>

            <div class="mt-3 md:mt-0 px-4 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                {{ course.term }}
            </div>
        </div>

        <!-- Content from the specific course markdown file -->
        <div class="prose-text text-slate-600 dark:text-slate-300">
            {{ course.content }}
        </div>
        
        <!-- Resources Buttons -->
        {% if course.resources %}
        <div class="mt-6 flex flex-wrap gap-3 pt-6 border-t border-slate-100 dark:border-slate-700">
            {% for r in course.resources %}
            <a href="{{ r.url }}" target="_blank" class="inline-flex items-center px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                <i class="{{ r.icon | default: 'fas fa-link' }} mr-2"></i> {{ r.label }}
            </a>
            {% endfor %}
        </div>
        {% endif %}

    </div>
    {% endfor %}
</div>


</div>