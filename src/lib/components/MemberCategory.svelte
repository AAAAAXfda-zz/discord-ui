<script>
    export let count;
</script>

<main class="flex mt-5 ml-2 text-lightgray">
    <slot></slot>
    <span class="ml-2 mr-2">-</span>
    {count}
</main>