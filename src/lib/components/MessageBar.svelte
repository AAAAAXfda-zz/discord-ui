<script>
    import Message from './Message.svelte'
</script>

<main class = "flex flex-col justify-end h-full">
    <Message>Hey !</Message>
    <Message author="John" profilepic = "https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg">👋</Message>
    <Message date = "Yersteday at 16:35">This project is called Discord-ui, and it's made by me ! The goal of this project was to recreate the Discord UI using SvelteKit and TailwindCSS.</Message>
    <Message date = "Yersteday at 16:35" author="John" profilepic = "https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg">🤯</Message>
    <Message date = "Yersteday at 16:35">Of course, nothing is functional as it's only a frontend copy.</Message>
    <Message date = "Yersteday at 16:36">I hope you enjoy it !</Message>
    <Message date = "Yersteday at 16:37">
        <div class="flex space-x-1">
            <span>Here is a link to the github repository :</span> <a href="https://github.com/herbemalveillante/discord-ui" class="text-blue underline visited:text-purple-600">just click right here</a>
        </div>
    </Message>
    <Message date = "Yersteday at 16:39" author="John" profilepic = "https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg">👍</Message>

</main>