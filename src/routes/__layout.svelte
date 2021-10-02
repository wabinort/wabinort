<script>
// Component imports
import Header from "$lib/components/Header.svelte";

// Import Tailwind CSS
import "../app.postcss";

</script>

<div class="min-h-screen relative">
    <Header/>
    <main class="flex flex-col self-stretch">
        <slot></slot>
    </main>
</div>