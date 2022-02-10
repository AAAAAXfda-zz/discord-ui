<script>
    import { tweened } from "svelte/motion";
    import { linear } from "svelte/easing";
    import { fly } from 'svelte/transition';

    let val = 90

    $: rotateValue = val
    const tweenValue = tweened(0)
    $: tweenValue.set(rotateValue)

    export let name;
    let open = true;

    function toggleClick() {
        open = !open;

        if (open) {
            val = 0
        } else {
            val = 90
        }
    }
</script>


<div class="text-darkgray font-bold cursor-pointer">
    <span class="flex items-center m-3 mb-0 hover:text-white">
        {#if open}
            <svg class="w-4 h-4 mr-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        {:else}
            <svg class="w-4 h-4 mr-1 -rotate-{$tweenValue} transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        {/if}
        <span class="w-full select-none"on:click={toggleClick}>
            {name}
        </span>
    </span>
    <div class = "flex flex-col">
        {#if open}
            <div transition:fly="{{y:-30, duration:400}}">
                <slot></slot>
            </div>
        {/if}
    </div>
</div>
