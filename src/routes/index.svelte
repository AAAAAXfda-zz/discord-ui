<script>
    import ChannelBar from "$lib/components/ChannelBar.svelte";
    import Chat from "$lib/components/Chat.svelte";
    // import MemberBar from "$lib/components/MemberBar.svelte";
    import ServerBar from "$lib/components/ServerBar.svelte";
</script>


<main class="flex">
    <ServerBar/>
    <ChannelBar/>
    <Chat/>
</main>

