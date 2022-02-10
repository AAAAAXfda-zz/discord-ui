<script>
    export let author = "HerbeMalveillante";
    // export let profilepic = "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png";
    export let profilepic = "https://pbs.twimg.com/profile_images/1457325731336409089/OwiA9ZMn_400x400.png";
    export let date = "Yersteday at 16:34";

    let color;
    if (author == "HerbeMalveillante") {
        color = "blue";
    } else {
        color = "white";
    }
</script>


<main class="flex relative w-full hover:bg-dark2 group mb-2 mt-2 items-center group overflow-visible">
    <img src={profilepic} alt="profile pic" class="w-12 h-12 rounded-full mr-5 ml-5 mt-2 mb-2 cursor-pointer">
    <div class="flex flex-col">
        <div class="flex items-end">
            {#if color == "blue"}
                <span class="mr-2 text-blue cursor-pointer">{author}</span>
            {:else}
                <span class="mr-2 text-white cursor-pointer">{author}</span>
            {/if}
            <span class="text-darkgray text-sm">{date}</span>
        </div>
        <slot></slot>
    </div>
    <div class="flex text-lightgray space-x-2 absolute right-6 -top-3 scale-0 group-hover:scale-100 transition-all ease-linear bg-dark2 rounded-md shadow-md p-1">
        <svg class="w-7 h-7 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
        <svg class="w-7 h-7 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <svg class="w-7 h-7 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
        <svg class="w-7 h-7 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
    </div>
</main>