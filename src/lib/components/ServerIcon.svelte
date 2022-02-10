<script>
    export let type;
    export let value;
    export let tooltip;
    let filename;

    if(type == "icon"){
        if (value == "compass"){
            filename == "../icons/compass.svg"
        }
    } else if (type == "image"){
        filename = value;
    }
</script>

<div class="rounded-[2em] w-14 h-14 flex-shrink-0 text-center bg-dark3 m-2 text-4xl text-bold
            text-green hover:rounded-2xl transition-all
            hover:bg-green hover:text-white group cursor-pointer">
    <div class="absolute bg-white w-1 h-8 left-0 mt-3 rounded-r scale-0 group-hover:scale-100 transition-all"></div>
    <div class="absolute bg-black left-[85px] mt-2 scale-0 group-hover:scale-100 transition-all text-xl text-white p-2 rounded-xl">{tooltip}</div>

    {#if type == 'icon' || type == 'image'}
        <img class="rounded-[2em] hover:rounded-2xl hover:bg-green transition-all" src="{filename}" alt="{tooltip}">
    {:else if type == 'text'}
        <span class="flex justify-center items-center text-center">{value}</span>
    {/if}
</div>