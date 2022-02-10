<script>
    import Member from "./Member.svelte";
    import MemberCategory from "./MemberCategory.svelte";
</script>


<main class="flex flex-col h-full w-60 bg-dark2">
    <MemberCategory count="2">Admins</MemberCategory>
    <Member activity="🫀 Coding" color="blue" avatar="https://pbs.twimg.com/profile_images/1457325731336409089/OwiA9ZMn_400x400.png">HerbeMalveillante</Member>
    <Member color="green" avatar="https://support.discord.com/hc/article_attachments/115000277491/wumpus_heart.png">Wumpus</Member>
    <MemberCategory count="1">Members</MemberCategory>
    <Member activity="🦾 Learning JavaScript">John</Member>
</main>