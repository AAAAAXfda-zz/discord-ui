<script>
    import Category from "./Category.svelte"
    import Channel from "./Channel.svelte";
</script>

<div class="flex flex-col bg-dark2 w-60 h-screen justify-between">

    <div>
        <div class="flex h-14 w-full border-b-2 shadow-lg border-dark1 text-white items-center justify-between font-mono font-bold hover:bg-dark4 cursor-pointer">
            <div class="m-3">
                <span>HERBE MALVEILLANTE</span>
                <span class="font-black text-2xl">⌵</span>
            </div>
        </div>
        <Category name="📌 INFO">
            <Channel name="roles" type="text"/>
            <Channel name="info" type="text"/>
        </Category>
        <Category name="🗣 GENERAL">
            <Channel name="🇫🇷 french" type="text"/>
            <Channel name="🇬🇧 english" type="text"/>
            <Channel name="📷 media" type="text"/>
            <Channel name="🔊 vocal" type="vocal"/>
            <Channel name="🎶 music" type="vocal"/>
        </Category>
        <Category name="💻 development">
            <Channel name="📦 packages" type="text"/>
            <Channel name="html-css" type="text"/>
            <Channel name="javascript" type="text"/>
            <Channel name="python" type="text"/>
        </Category>
    </div>


    <div class="flex h-auto w-full bg-dark1_5 text-white">
        <div class="flex m-3 w-full justify-between">
            <div class="relative">
                <img class="w-10 h-10" src="https://pbs.twimg.com/profile_images/1457325731336409089/OwiA9ZMn_400x400.png" alt="profile">
                <div class="absolute w-2 h-2 bg-green rounded-full bottom-0 right-1"></div>
            </div>
            <div class="flex flex-col w-20 overflow-hidden group">
                <span>HerbeMalveillante</span>
                <div class="h-4 relative overflow-hidden justify-start flex flex-col">
                    <span class="absolute text-xs top-0 group-hover:-top-10 text-lightgray transition-all">🫀 Coding</span>
                    <span class="absolute text-xs top-10 group-hover:top-0 text-lightgray transition-all">#3259</span>
                </div>
            </div>
            <div class="flex align-end items-center text-darkgray">
                <svg class="w-6 h-6 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
                <svg class="w-6 h-6 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg>
                <svg class="w-6 h-6 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
    </div>
    
    
</div>
