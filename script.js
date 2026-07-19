// ==========================================================================
// --- 1. CONFIGURABLE GUEST DATABASE STRATA (LOCALSTORAGE SYNCED) ---
// ==========================================================================
let presentationSlides = JSON.parse(localStorage.getItem("horizon_slides_db")) || [
    {
        key: "anika",
        name: "ANIKA",
        photo: "ani.jpeg",
        msg: `The Sister We Were Lucky to Find

Some people come into our lives and, without even realizing it, become a part of our story forever. They do not ask for any special place, but somehow they earn one. Anika is that person for us.

When our story was still just a collection of quiet feelings, shy moments, and things left unsaid, she was the one who noticed what we were too afraid to admit. She saw something between us before we had the courage to see it ourselves. With her gentle encouragement and the way she always knew when to push us a little, she helped us take the first step toward a conversation that changed our lives. Today, when we look back, it is hard to imagine how our story would have started without her. She was not just there at the beginning—she was a reason the beginning happened.

Anika is someone who carries a beautiful kind of strength. She works hard for the things she cares about, brings creativity into everything she does, and always finds the courage to stand by the people she loves. What makes her special is that she never does these things to be noticed. She simply cares. Whether someone needs advice, support, or just someone to listen, she is always there. She has a way of making people feel comfortable, understood, and like they are never alone. She also has a beautiful habit of bringing little joys into our lives, especially by bringing delicious things to eat for us and making simple moments feel even more special.

For Akashi, Anika has always been more than a friend. She has been like an elder sister—someone he can trust, learn from, and always count on. For me, she has been a wonderful friend and a sister whose kindness has meant more than words can explain. Somewhere along the way, without any effort or expectation, she became family to both of us.

So many of our favorite memories have her in them. The long conversations, the random laughs, the places we explored, the delicious treats she brought for us, and even the simple everyday moments became more special because she was there. She has a way of making ordinary times feel meaningful. Her support has never felt like a responsibility or a favor—it has always come from a place of genuine love and care.

Thank you, Anika, for believing in us when we were still unsure of ourselves. Thank you for helping two shy people find the courage to take that first step. Thank you for every conversation, every laugh, every piece of advice, every memory, every thoughtful gesture, and every moment you have shared with us. Most of all, thank you for becoming the sister we never expected to find but are so grateful to have.

Every story has someone who helps it begin.
In ours, that person will always be you`
    },
    {
        key: "sahu",
        name: "SAHU",
        photo: "sah.jpeg",
        msg: `The Brother Who Always Stood By Us

Every story has people who become a special part of the journey—not because they were there from the very beginning, but because they stayed through every high and low. For us, Sahu is that person. He has been the one who reminded us to stay strong, to understand each other, and to never give up on the things that truly matter.

Sahu has always had a way of being there when we needed him the most. Whether we were celebrating happy moments or dealing with misunderstandings, he was someone we could count on. He listens patiently, gives honest advice, and always tries to see things from everyone’s perspective. His words come from a place of genuine care, and that is what makes them so meaningful.

One of the things we appreciate most about Sahu is how much he looks out for the people he loves. He has always made sure that we never felt alone, especially during times when things were difficult. He reminds us that every relationship has challenges, but what matters is the effort we put into understanding and supporting each other. His advice has helped us stay patient, think clearly, and remember the value of the bond we share.

But Sahu is not just the person who gives serious advice—he is also the person who brings laughter wherever he goes. His playful and mischievous side has given us some of our best memories. Even in stressful moments, he knows how to make us smile and remind us not to take life too seriously. His humor and energy have made ordinary moments feel special.

For both of us, Sahu is much more than a friend. He is a brother—the kind of person who stands beside you, supports you, and wants the best for you without expecting anything in return. Not every family bond comes from blood; some are created through trust, care, and the memories we build together. Sahu has become a part of our family in the truest sense.

Thank you, Sahu, for always being there for us. Thank you for every conversation, every piece of advice, every laugh, and every moment when you reminded us to keep believing in each other. Your kindness, loyalty, and support have made a difference in our lives, and we will always be grateful for that.

Some people become a part of your story.
Some people help you keep writing it.
For us, you will always be that brother.`
    },
    {
        key: "komal",
        name: "KOMAL",
        photo: "komal.jpeg",
        msg: `The One Who Saw Love Before We Did

Some people wait for a story to happen before they believe in it. But some people have a way of noticing the little things—the small moments, the hidden feelings, and the things everyone else misses. Komal has always been that person.

Before our story had a name, before we even understood what was happening ourselves, Komal somehow saw it. She was the first person to notice that there was something more than just friendship between us—the way we talked, the way we smiled, and the way we were always drawn to each other. She trusted her instincts and shared what she noticed with Anika, not knowing that this small conversation would become the beginning of something so special. Looking back now, it feels like that one little observation changed everything. Sometimes, the biggest stories begin with someone simply noticing the smallest details.

If there is one person who can bring energy into any room, it is Komal. She has this natural ability to make people smile, turn normal moments into fun memories, and make everyone around her feel comfortable. Her laughter, her excitement, and her endless enthusiasm are some of the things that make her so special. Being around her means there is always a joke to laugh at, a story to share, or a memory waiting to be made.

One thing we can never forget is her famous Maggie. Somehow, it was never just Maggie—it was a whole experience. It became our comfort after tiring days, a reason to sit together and talk, and one of those simple things that turned into a beautiful memory. It is funny how the smallest gestures from the right person can stay with us forever.

Komal has one of the biggest hearts. She is the kind of person who always checks on others, makes sure everyone is okay, and puts the happiness of people she loves before her own. But the funny thing is, while she takes so much care of everyone else, she often forgets to give herself the same care. That is what makes her even more special—she gives so much love without ever expecting anything back.

And then there is her teasing, which deserves its own special mention. If there was ever a competition for teasing us the most, Komal would win without a doubt. Every little moment, every awkward situation, and every small interaction somehow became a chance for her to make fun of us and make us blush. At the time, we may have wanted to hide, but today those moments are some of the funniest memories we have. Her teasing was never meant to embarrass us—it was her way of showing love and making our journey even more fun.

Thank you, Komal, for being the first person to see something special in our story before we even realized it ourselves. Thank you for every laugh, every bowl of Maggie, every tease, every bit of your energy, and every little way you have cared for us. Your happiness is contagious, your kindness is unforgettable, and having you as a part of our journey means more than words can say.

Every love story begins with a spark.
Ours was first seen through your eyes.`
    },
    {
        key: "prabal",
        name: "PRABAL",
        photo: "prabal.jpeg",
        msg: `The Friend Who Made Every Moment Better

Every journey has that one person who makes things feel a little easier, a little happier, and a lot more memorable. Someone who gives advice when you need it, helps without expecting anything in return, and knows how to bring a smile even on difficult days. For us, that person has always been Prabal.

Some people make a difference through big gestures, while others do it through the small things they do every day. Prabal is one of those rare people whose kindness is always present, even if he never makes a big deal out of it. Whether it was helping us when we were stuck, sharing his thoughts when we needed guidance, or simply being there to listen, he has always supported us in his own quiet and genuine way.

One thing we have always admired about Prabal is the way he thinks. He has a sharp mind and a calm approach that helps him see things clearly, even when situations feel confusing. His advice has helped us through many moments of doubt, and what makes it special is that it always comes from a place of care. He never tries to tell us what to do—he simply helps us see things from a better perspective.

But Prabal is not just someone we look up to for his wisdom. He is also the person who brings laughter into our lives. His sense of humor has turned normal days into memories we still smile about. Even during stressful times, he has a way of making things lighter and reminding us not to take everything too seriously. Some of our happiest moments are the ones where he was simply being himself.

One memory that will always stay with us is the day he gave Akashi besan ke laddoos. It may seem like a small gesture, but for us, it showed exactly the kind of person Prabal is. It was a simple way of showing care and thoughtfulness, and it became a memory that we will always cherish. Sometimes, the smallest acts of kindness are the ones that mean the most.

Prabal is not just a friend who was part of our journey—he is someone who made the journey more enjoyable. His support, his advice, his laughter, and his presence have all added something special to our lives. The memories we have created with him are moments we will always look back on with a smile.

Thank you, Prabal, for always being there, for every laugh you shared with us, for every time you helped us, and for every little thing you did that made a difference. Thank you for making our journey happier and for being someone we could always count on. Your kindness and friendship will always hold a special place in our hearts.

Some people become a part of your story.
You made ours a little brighter, a little happier, and a lot more memorable.`
    },
    {
        key: "divya",
        name: "DIVYA",
        photo: "divya.jpeg",
        msg: `The One Who Captured Our Forever

Some people are good at making memories, and some people are good at keeping them alive. Divya has always been the person who did both in her own special way. She was never just the person holding the camera—she was the reason so many of our favorite moments still exist today.

Whenever there was a plan, an outing, or even a random little adventure, Divya was always happy to be there. She never needed much convincing. Her excitement and cheerful nature made every moment more fun, and before we knew it, she would be capturing those little moments that we would later look back on and smile about.

When we go through our old pictures, we see more than just photographs. We see the laughter, the places we visited, the silly moments, and the memories we created together. And behind so many of those pictures is Divya, quietly making sure everyone else was included. While we were busy enjoying the moment, she was making sure we would always have a way to remember it.

Divya has a way of bringing happiness wherever she goes. She is naturally cheerful, always full of energy, and somehow manages to make even simple moments feel special. Her playful jokes, her funny comments, and her ability to find joy in the smallest things have given us countless memories to laugh about. Being around her means there is never a dull moment.

One of the things we love most about Divya is how carefree and genuine she is. She has a beautiful habit of not overthinking things and simply enjoying life as it comes. Sometimes she may forget small things, sometimes she gets caught up in her own little world, but those are the moments that make her who she is. Her little quirks and imperfections are what make her so real, lovable, and unforgettable.

If there was ever an award for the person who captured the heart of our journey, Divya would win it without a doubt. Every picture she took holds a story, a feeling, and a memory that we can return to anytime. Years from now, when we look back at these photographs, we will not just see images—we will remember the laughter, the adventures, and the happiness we shared.

Thank you, Divya, for being there through so many moments, for making us laugh, for bringing your positive energy everywhere you go, and for saving the memories we never want to lose. Thank you for being the one behind the camera, the one who captured our smiles, and the one who helped turn ordinary days into unforgettable memories.

Some people are part of a story.
You are the reason our story will always be remembered.`
    },
    {
        key: "sakshi",
        name: "SAKSHI DIDI",
        photo: "sakshi.jpeg",
        msg: `The Guardian Behind Our Happiest Memories

Some people become an important part of our lives without even realizing how much they mean to us. They quietly stand by us, help us, and make things easier in ways we may not always notice at the time. For us, that person has always been Sakshi Didi.

Being Akashi's elder sister, she was someone we naturally respected and looked up to. But over time, she became much more than just a sister figure. She became someone we could trust, someone who welcomed us with an open heart, and someone who always made us feel comfortable and cared for.

One of the things that makes Sakshi Didi so special is the way she balances everything. She can be serious and responsible when needed, always making sure things are taken care of. But at the same time, she has a fun and funny side that comes out when we least expect it. She knows how to guide us, but she also knows how to make us laugh and turn ordinary moments into happy memories.

She has helped us in so many ways throughout our journey. Whether it was making plans possible, helping us spend time together, or simply being there whenever we needed support, she always found a way to make things easier. She never made us feel like we were asking for too much; instead, she made us feel like our happiness mattered to her.

One thing we will always remember is her amazing cooking. Her food was never just about the taste—it was about the love and care that came with it. Every meal felt like a reminder that we were welcomed and treated like family. The conversations, laughter, and moments shared around her food are memories we will always treasure.

Some of our favorite memories are also the times she took us out, especially the three melas we went to together. Those were not just simple outings; they became special moments filled with fun, excitement, laughter, and memories that we still talk about. The best part was not just where we went, but the fact that she was the reason those moments happened.

Thank you, Sakshi Didi, for everything you have done for us. Thank you for your support, your kindness, your delicious food, your time, and for always making us feel like we are a part of your family. Many of the happiest moments in our journey exist because you helped make them possible.

You may not always realize it, but you have played a very important role in our story.
And for that, we will always be grateful to you.`
    },
    {
        key: "tanya and rishi",
        name: "TANYA DIDI & RISHI BHAIYA",
        photo: "Tanya and Rishi.png",
        msg: `The Couple Who Taught Us the Beauty of Togetherness

Some people come into our lives for a short time but leave behind memories that stay forever. Tanya Didi and Rishi Bhaiya are those special people. Even though they were a part of our journey for only a little while, the warmth, guidance, and happiness they brought with them will always hold a special place in our hearts.

Seeing Tanya Didi and Rishi Bhaiya together taught us that a beautiful relationship is not just about love, but also about understanding, patience, trust, and standing by each other through every situation. They showed us that the strongest bonds are built through small things—the way you care, the way you listen, and the way you support each other every day. They never had to explain what a good relationship looks like; they showed us through their own bond.

Both of them have a way of making people feel comfortable and valued. Their kindness, positivity, and genuine nature made every interaction with them special. Whether it was a simple conversation or a shared moment of laughter, they had the ability to make everyone around them feel at ease. Their presence brought a sense of warmth that is difficult to forget.

One of the biggest gifts they gave us was their guidance. Whenever we needed advice or felt unsure about something, they shared their thoughts with so much honesty and care. They helped us understand that every relationship has its ups and downs, but what matters most is how two people choose to handle them together. Their words always came from experience, and their advice felt less like guidance and more like support from people who truly cared about us.

What makes Tanya Didi and Rishi Bhaiya even more special is the way they encouraged us to appreciate each other. They reminded us not to focus on small disagreements but to value the love, respect, and connection we share. Because of them, we learned the importance of cherishing little moments, expressing gratitude, and making efforts to grow together.

Even though their time with us was short, the impact they made was much bigger than the time they spent. Some people are remembered not because of how long they stay, but because of how much happiness and positivity they bring into our lives. Tanya Didi and Rishi Bhaiya are one such example.

Thank you, Tanya Didi and Rishi Bhaiya, for your kindness, your laughter, your support, and for sharing your experiences with us. Thank you for helping us understand relationships better and for inspiring us through the beautiful bond you share. The memories we made and the lessons we learned from you will always remain a meaningful part of our story.

Some people may only be a chapter in our journey.
But the memories and lessons they leave behind last forever.`
    },
    {
        key: "sona",
        name: "SONA (GOLDY)",
        photo: "sona.jpeg",
        msg: `### The Heart That Never Stopped Believing in Us

Every love story has that one person who may not be standing in the spotlight, but whose presence can be felt in every beautiful moment. Someone who quietly supports, understands, and protects the bond between two people. Someone who stays when things get difficult and reminds you that some relationships are worth fighting for. For us, that person will always be our Goldy, our Sona.

When we look back at our journey, we realize that Sona was never just a friend who was there for us. She became one of the most important parts of our story. She was the person who listened to both sides, understood both hearts, and helped us find our way back to each other whenever misunderstandings came between us. There were moments when small fights felt bigger than they actually were, when emotions took over, and when it became difficult to understand each other. But Sona was always there, reminding us to be patient, to communicate, and to never give up on something that truly mattered.

Some people are happy when they see you happy, but very few people genuinely fight to protect your happiness. Sona has always been that rare person for us. She never chose sides; she chose our bond. She never wanted one person to win and the other to lose; she wanted both of us to understand each other and grow together. Her efforts, her patience, and her constant support have played a bigger role in our relationship than words can ever explain.

She became our comfort zone and our trusted person. Whenever Akashi wanted to talk to me on the phone, Sona was the person who made those conversations possible. Whenever Akashi wanted to meet me, saying “I’m going to meet Sona” became the reason everything worked out. Because of her, we got the chance to create countless memories that we will always carry in our hearts. The simple moments, the random conversations, the laughter, and the time we spent together became special because she was a part of them.

What makes Sona even more special is the kind of person she is. She has a heart full of kindness, a personality full of warmth, and a sense of humor that can make anyone smile. She has always known how to make difficult moments feel lighter and how to bring happiness into ordinary days. Her care never felt forced; it always came naturally. She helped us not because she had to, but because she genuinely cared about us.

And of course, we can never forget her amazing biryani. It was never just food; it was a memory, an emotion, and a symbol of the love and comfort she shared with us. Every time we remember those moments, we remember the laughter, the conversations, and the happiness that came along with it. Saying “we miss your biryani” is not just about the taste—it is about missing those beautiful moments that were created because of you.

Sona, we want you to know something very special: you are our favourite, and you will always hold a very special place in our hearts. Among all the people who have been a part of our journey, you are someone who stands apart because of the love, effort, and care you have given us. You are not just a friend or a sister to us; you are family. You are one of the biggest blessings our relationship has received.

Thank you, Goldy, for every time you supported us, every time you listened to us, every time you helped us understand each other, and every time you stood beside us without expecting anything in return. Thank you for every secret you kept, every meeting you made possible, every laugh you gave us, every comforting word, and every plate of unforgettable biryani. Thank you for believing in our love even during the moments when we needed that belief the most.

This book is a collection of our memories, our emotions, and our journey together. But somewhere between these pages, there will always be a special chapter written just for you. Because without your support, patience, and love, our story would not have been the same.

Some people become a part of a love story.
Some people make that love story stronger.
You did both for us, Sona. Thank you for being our favourite, our special person, and one of the greatest reasons our story became what it is today.`
    },
    {
        key: "partner",
        name: "My Forever Love",
        photo: "akashi.jpeg",
        msg: `ERROR 404 — DESCRIPTION NOT FOUND

System Status: Failed to generate profile.

We sincerely apologize, but the requested description for Akashi could not be processed.

Reason: The database has exceeded its maximum storage capacity. Every attempt to document her kindness, beauty, laughter, strength, and the countless reasons she is loved resulted in an infinite loop. The system detected that no finite collection of words can accurately represent someone whose worth cannot be measured.

Error Code: INFINITE_ADMIRATION_EXCEPTION

Please try again... or simply look into her eyes.
Sometimes, reality is more beautiful than language could ever describe.`
    },
];

let soundtrackLinks = JSON.parse(localStorage.getItem("horizon_audio_queue")) || [
    { label: "🎵 Hai Apna Dil To Awara", src: "a.mp3"},
    { label: "✨ Lag Ja Gale", src: "LAG JA GALE.mp3" },
    { label: "🎹 Paper Boat", src: "PAPER BOAT.mp3" }
];

let filteredDeck = [];
let currentSlideIndex = 0;
let base64ImageStringCache = ""; 
let currentActiveVisitorName = ""; 
let isUnknownGuestJourney = false; 

// ==========================================================================
// --- 2. BAAZIGAR STRICT AUTHORIZATION & INLINE EDIT CONTROLS ---
// ==========================================================================
const toggleEditBtn = document.getElementById("toggleInlineEditBtn");
const addGuestCardBtn = document.getElementById("addNewGuestCardBtn");
const deleteGuestCardBtn = document.getElementById("deleteGuestCardBtn");
const editorFormBox = document.getElementById("inlineEditorFormWrapper");
const saveChangesBtn = document.getElementById("saveInlineChangesBtn");

const hiddenFileInput = document.getElementById("editCardPhotoFileInput");
const triggerFilePickerBtn = document.getElementById("triggerFilePickerBtn");
const fileFeedback = document.getElementById("fileSelectionFeedback");

if (triggerFilePickerBtn) {
    triggerFilePickerBtn.addEventListener("click", () => hiddenFileInput.click());
}

if (hiddenFileInput) {
    hiddenFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            fileFeedback.innerText = file.name;
            const reader = new FileReader();
            reader.onload = function(event) {
                base64ImageStringCache = event.target.result; 
            };
            reader.readAsDataURL(file);
        }
    });
}

if (toggleEditBtn) {
    toggleEditBtn.addEventListener("click", () => {
        editorFormBox.classList.toggle("open");
        if(editorFormBox.classList.contains("open")) {
            const currentCard = filteredDeck[currentSlideIndex];
            document.getElementById("editCardMsgTextarea").value = currentCard.msg;
            base64ImageStringCache = currentCard.photo; 
            fileFeedback.innerText = "Current image retained";
        }
    });
}

if (saveChangesBtn) {
    saveChangesBtn.addEventListener("click", () => {
        const currentCard = filteredDeck[currentSlideIndex];
        const matchedIdx = presentationSlides.findIndex(p => p.key === currentCard.key);
        
        if(matchedIdx !== -1) {
            const updatedThankYouMessage = document.getElementById("editCardMsgTextarea").value.trim();
            
            presentationSlides[matchedIdx].photo = base64ImageStringCache;
            presentationSlides[matchedIdx].msg = updatedThankYouMessage;
            
            filteredDeck[currentSlideIndex].photo = base64ImageStringCache;
            filteredDeck[currentSlideIndex].msg = updatedThankYouMessage;
            
            localStorage.setItem("horizon_slides_db", JSON.stringify(presentationSlides));
            alert("Guest slide photo and thank-you text updated successfully!");
            
            editorFormBox.classList.remove("open");
            renderActiveSlideIndex(currentSlideIndex);
        }
    });
}

if (addGuestCardBtn) {
    addGuestCardBtn.addEventListener("click", () => {
        const rawName = prompt("Enter new guest's first name (lowercase only):");
        if(!rawName) return;
        const cleanKey = rawName.trim().toLowerCase();
        
        if(presentationSlides.some(p => p.key === cleanKey)) {
            alert("This profile key name already exists!");
            return;
        }
        
        const newGuestObj = {
            key: cleanKey,
            name: rawName.trim(),
            photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200", 
            msg: "Thank you for joining our celebration story circle frame!"
        };
        
        presentationSlides.splice(presentationSlides.length - 1, 0, newGuestObj); 
        localStorage.setItem("horizon_slides_db", JSON.stringify(presentationSlides));
        alert(`Success! '${rawName}' added to the slide queue database paths.`);
        window.location.reload();
    });
}

if (deleteGuestCardBtn) {
    deleteGuestCardBtn.addEventListener("click", () => {
        const currentCard = filteredDeck[currentSlideIndex];
        if (currentCard.key === "partner") {
            alert("The final partner presentation card is locked and cannot be removed!");
            return;
        }
        const confirmation = confirm(`Are you absolutely sure you want to permanently delete ${currentCard.name}'s guest slide?`);
        if (confirmation) {
            presentationSlides = presentationSlides.filter(p => p.key !== currentCard.key);
            localStorage.setItem("horizon_slides_db", JSON.stringify(presentationSlides));
            alert("Guest slide successfully removed!");
            window.location.reload();
        }
    });
}

// ==========================================================================
// --- 3. JUKEBOX BACKDROP PLAYLIST MUSIC ENGINE ---
// ==========================================================================
let activePlaylistIndices = [];
let currentPlayingTrackIndex = 0;
let backgroundJukebox = new Audio();
let selectedSongTrackIndex = 0;

function populateOnboardingAudioPanelList() {
    const queueWrapper = document.getElementById("onboardingMusicQueueList");
    if(!queueWrapper) return;
    
    queueWrapper.innerHTML = soundtrackLinks.map((track, index) => `
        <div class="music-track-row" id="audioTrackRow_${index}">
            <button class="music-chip ${index === selectedSongTrackIndex ? 'active' : ''}" data-song-idx="${index}">
                ${track.label}
            </button>
            <button class="audio-delete-bin-btn" data-delete-idx="${index}" style="display: ${currentActiveVisitorName === 'baazigar' ? 'flex' : 'none'};">🗑️</button>
        </div>
    `).join("");

    document.querySelectorAll(".music-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".music-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            selectedSongTrackIndex = parseInt(chip.getAttribute("data-song-idx"));
        });
    });

    document.querySelectorAll(".audio-delete-bin-btn").forEach(bin => {
        bin.addEventListener("click", (e) => {
            e.stopPropagation();
            const targetIdx = parseInt(bin.getAttribute("data-delete-idx"));
            if(soundtrackLinks.length <= 1) { alert("You must retain at least one track baseline for the queue chain!"); return; }
            if(confirm(`Wipe track selection: "${soundtrackLinks[targetIdx].label}" from system storage pools?`)) {
                soundtrackLinks.splice(targetIdx, 1);
                localStorage.setItem("horizon_audio_queue", JSON.stringify(soundtrackLinks));
                if(selectedSongTrackIndex >= soundtrackLinks.length) selectedSongTrackIndex = 0;
                populateOnboardingAudioPanelList();
            }
        });
    });
}

const audioFileInput = document.getElementById("baazigarAudioFileInput");
const triggerAudioPickerBtn = document.getElementById("triggerAudioFilePickerBtn");

if(triggerAudioPickerBtn) {
    triggerAudioPickerBtn.addEventListener("click", () => audioFileInput.click());
}
if(audioFileInput) {
    audioFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                soundtrackLinks.push({ label: `🎵 ${file.name.slice(0,15)}...`, src: event.target.result });
                localStorage.setItem("horizon_audio_queue", JSON.stringify(soundtrackLinks));
                alert("New custom sound attached successfully!");
                populateOnboardingAudioPanelList();
            };
            reader.readAsDataURL(file);
        }
    });
}

function initializeContinuousPlaylist(selectedInitialTrackIdx) {
    if(soundtrackLinks.length === 0) return;
    activePlaylistIndices = [selectedInitialTrackIdx];
    for(let i = 0; i < soundtrackLinks.length; i++) {
        if(i !== selectedInitialTrackIdx) activePlaylistIndices.push(i);
    }
    currentPlayingTrackIndex = 0;
    playTrackQueueIndex(currentPlayingTrackIndex);
    
    backgroundJukebox.onended = function() {
        currentPlayingTrackIndex++;
        if(currentPlayingTrackIndex < activePlaylistIndices.length) playTrackQueueIndex(currentPlayingTrackIndex);
    };
}
function playTrackQueueIndex(queueIdx) {
    if(!soundtrackLinks[activePlaylistIndices[queueIdx]]) return;
    backgroundJukebox.src = soundtrackLinks[activePlaylistIndices[queueIdx]].src;
    backgroundJukebox.preload = "auto";
    backgroundJukebox.play().catch(e => console.log("Audio channel access initialization error safe fallback."));
}

// ==========================================================================
// --- 4. COUNTDOWN CLOCK CORE SYSTEM ---
// ==========================================================================
const celebrationTargetTime = new Date("July 20, 2027 00:00:00").getTime();
const trackingInterval = setInterval(() => {
    const delta = celebrationTargetTime - new Date().getTime();
    if (delta <= 0) {
        clearInterval(trackingInterval);
        deployInteractiveOpenButton();
    } else {
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.innerText = String(Math.floor(delta / (1000 * 60 * 60 * 24))).padStart(2, '0');
            hoursEl.innerText = String(Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            minutesEl.innerText = String(Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            secondsEl.innerText = String(Math.floor((delta % (1000 * 60)) / 1000)).padStart(2, '0');
        }
    }
}, 1000);

deployInteractiveOpenButton();

function deployInteractiveOpenButton() {
    const timerZone = document.getElementById("timerInteractiveZone");
    if(!timerZone) return;
    timerZone.innerHTML = `
        <h1 class="main-announcement" style="animation: fadeIn 1s ease;">The Seal Has Lifted</h1>
        <button id="enterPortalBtn" class="premium-btn gold" style="padding: 15px 40px; font-size: 1.1rem; border-radius: 40px; box-shadow: 0 0 20px var(--champagne-gold);">Enter The Story Room</button>
    `;
    document.getElementById("enterPortalBtn").addEventListener("click", triggerCloudTransitionSequence);
}

// ==========================================================================
// --- 5. CLEAN HORIZONTAL LAYER SLIDING TRANSITION SWEEPS ---
// ==========================================================================
function triggerCloudTransitionSequence() {
    const curtain = document.getElementById("cloudTransitionCurtain");
    curtain.classList.add("active");
    
    setTimeout(() => {
        document.getElementById("landingContainer").style.display = "none";
        document.getElementById("horizonDashboard").classList.add("active");
        
        const snapper = document.getElementById("dashboardSnapper");
        if(snapper) snapper.scrollTop = 0;
        
        curtain.classList.remove("active");
        populateOnboardingAudioPanelList();
    }, 1000); 
}

// ==========================================================================
// --- 6. VEHICLE FLIGHT LAUNCH INTERACTION PIPELINES (UPDATED) ---
// ==========================================================================
const skyMachineBtn = document.getElementById("skyMachineBtn");
const onboardingOverlay = document.getElementById("onboardingOverlay");
const skyMachineWrapper = document.getElementById("skyMachineWrapper");

if (skyMachineBtn) {
    skyMachineBtn.addEventListener("click", () => {
        if (skyMachineWrapper.classList.contains("triggered-flight")) return;
        
        const baazigarAudioBox = document.getElementById("baazigarJukeboxControlsZone");
        baazigarAudioBox.style.display = (currentActiveVisitorName === "baazigar") ? "block" : "none";
        populateOnboardingAudioPanelList();
        onboardingOverlay.classList.add("open");
    });
}

document.getElementById("submitOnboardingBtn").addEventListener("click", () => {
    const nameInput = document.getElementById("guestNameInput").value.trim().toLowerCase();
    if(!nameInput) {
        alert("Please provide a name to chart your constellation course!");
        return;
    }
    
    currentActiveVisitorName = nameInput;
    onboardingOverlay.classList.remove("open");
    
    skyMachineWrapper.classList.add("triggered-flight");
    
    initializeContinuousPlaylist(selectedSongTrackIndex);
    
    const isRegistered = presentationSlides.some(s => s.key === nameInput);
    
    if (nameInput === "baazigar") {
        isUnknownGuestJourney = false;
        filteredDeck = [...presentationSlides];
    } else if (isRegistered) {
        isUnknownGuestJourney = false;
        const foundIdx = presentationSlides.findIndex(s => s.key === nameInput);
        filteredDeck = [presentationSlides[foundIdx], ...presentationSlides.filter((s, idx) => idx !== foundIdx)];
    } else {
        isUnknownGuestJourney = true;
        filteredDeck = [...presentationSlides];
    }
    
    setTimeout(() => {
        document.getElementById("dashboardSnapper").style.display = "none";
        renderActiveSlideIndex(0);
        document.getElementById("journalSlideshowContainer").classList.add("active");
        
        skyMachineWrapper.classList.remove("triggered-flight");
    }, 1200); 
});

function renderActiveSlideIndex(idx) {
    currentSlideIndex = idx;
    const targetSlide = filteredDeck[currentSlideIndex];
    document.getElementById("slideGuestTitle").innerText = targetSlide.name;
    document.getElementById("slideGuestMessage").innerText = targetSlide.msg;
    document.getElementById("slideGuestPhoto").src = targetSlide.photo;
    
    const txtContainer = document.querySelector(".chronicle-text-scroll-container");
    if(txtContainer) txtContainer.scrollTop = 0;
    
    const adminActionRow = document.querySelector(".inline-admin-controls");
    const inlineEditBtn = document.getElementById("toggleInlineEditBtn");
    const deleteBtn = document.getElementById("deleteGuestCardBtn");
    
    if (currentActiveVisitorName === "baazigar") {
        adminActionRow.style.display = "flex";
        adminActionRow.style.visibility = "visible";
        
        if (targetSlide.key === "partner") {
            inlineEditBtn.style.display = "block"; 
            deleteBtn.style.display = "none";     
        } else {
            inlineEditBtn.style.display = "block";
            deleteBtn.style.display = "block";
        }
    } else {
        adminActionRow.style.display = "none";
        adminActionRow.style.visibility = "hidden";
    }
    
    const nextBtn = document.getElementById("nextSlideBtn");
    if (currentSlideIndex === filteredDeck.length - 1) {
        nextBtn.innerText = isUnknownGuestJourney ? "➔ Join" : "🎮 Land";
    } else {
        nextBtn.innerText = "➔";
    }
}

document.getElementById("nextSlideBtn").addEventListener("click", () => {
    if (currentSlideIndex < filteredDeck.length - 1) {
        renderActiveSlideIndex(currentSlideIndex + 1);
        editorFormBox.classList.remove("open");
    } else {
        if (isUnknownGuestJourney) {
            document.getElementById("journalSlideshowContainer").classList.remove("active");
            document.getElementById("unknownGuestEnrollmentStage").classList.add("active");
            initializeUnknownGuestFormDefaults();
        } else {
            landToFinalArcadeViewport();
        }
    }
});

function landToFinalArcadeViewport() {
    if(backgroundJukebox) {
        backgroundJukebox.pause(); backgroundJukebox.currentTime = 0; backgroundJukebox.onended = null;
    }
    document.getElementById("journalSlideshowContainer").classList.remove("active");
    document.getElementById("unknownGuestEnrollmentStage").classList.remove("active");
    document.getElementById("standaloneArcadeStage").classList.add("slide-up-active");
    displayLeaderboardsUnified();
}

// ==========================================================================
// --- 7. DYNAMIC UNKNOWN GUEST INTERSTITIAL ENTRY PLATFORM ---
// ==========================================================================
const unknownFileInput = document.getElementById("unknownGuestFileInput");
const unknownFileSelectBtn = document.getElementById("unknownFileSelectBtn");
const unknownFileFeedback = document.getElementById("unknownFileFeedback");
const unknownMsgTextarea = document.getElementById("unknownGuestMsgTextarea");

let unknownBase64PhotoStr = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"; 
const formDefaultPlaceholderText = "Be the part of our story. Write about yourself, us and what you want to say to us.";

function initializeUnknownGuestFormDefaults() {
    unknownMsgTextarea.value = formDefaultPlaceholderText;
    unknownBase64PhotoStr = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200";
    unknownFileFeedback.innerText = "No file selected";
    
    const clearPlaceholderHandler = () => {
        if (unknownMsgTextarea.value === formDefaultPlaceholderText) {
            unknownMsgTextarea.value = "";
        }
    };
    unknownMsgTextarea.addEventListener("focus", clearPlaceholderHandler);
    unknownMsgTextarea.addEventListener("touchstart", clearPlaceholderHandler);
}

if (unknownFileSelectBtn) {
    unknownFileSelectBtn.addEventListener("click", () => unknownFileInput.click());
}

if (unknownFileInput) {
    unknownFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            unknownFileFeedback.innerText = file.name;
            const reader = new FileReader();
            reader.onload = function(event) {
                unknownBase64PhotoStr = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

document.getElementById("submitUnknownGuestBtn").addEventListener("click", () => {
    let finalNote = unknownMsgTextarea.value.trim();
    if (!finalNote || finalNote === formDefaultPlaceholderText) {
        alert("Please write a small token note to enlist your chronicle path!");
        return;
    }
    
    const newUserRecord = {
        key: currentActiveVisitorName,
        name: currentActiveVisitorName.charAt(0).toUpperCase() + currentActiveVisitorName.slice(1),
        photo: unknownBase64PhotoStr,
        msg: finalNote
    };
    
    presentationSlides.splice(presentationSlides.length - 1, 0, newUserRecord);
    localStorage.setItem("horizon_slides_db", JSON.stringify(presentationSlides));
    
    document.getElementById("unknownSuccessOverlay").classList.add("open");
});

document.getElementById("unknownLandBtn").addEventListener("click", () => {
    document.getElementById("unknownSuccessOverlay").classList.remove("open");
    landToFinalArcadeViewport();
});

// ==========================================================================
// --- 8. AMBIENT BACKGROUND CANVAS TWINKLE STAR ENGINE ---
// ==========================================================================
const canvas = document.getElementById("sparkleCanvas");
const ctx = canvas.getContext("2d");
let sparkleArray = [];

function resizeCanvasToWindow() {
    if (canvas) {
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    }
}
window.addEventListener("resize", resizeCanvasToWindow);
class BackgroundSparkleParticle {
    constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.radius = Math.random() * 1.5 + 0.5; this.currentAlpha = Math.random() * 0.5 + 0.2; this.twinkleSpeed = Math.random() * 0.01 + 0.005; }
    draw() { ctx.fillStyle = `rgba(255, 255, 255, ${this.currentAlpha})`; ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fill(); }
    update() { this.currentAlpha += this.twinkleSpeed; if (this.currentAlpha > 0.7 || this.currentAlpha < 0.1) this.twinkleSpeed = -this.twinkleSpeed; }
}
resizeCanvasToWindow();
if (canvas) {
    for (let i = 0; i < 45; i++) sparkleArray.push(new BackgroundSparkleParticle());
}
function renderingSparkleFrameLoop() {
    if (!canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparkleArray.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(renderingSparkleFrameLoop);
}
renderingSparkleFrameLoop();

// ==========================================================================
// --- 9. TWIN INTEGRATED ARCADE PIANO ENGINES (SHARED HIGHSCORES) ---
// ==========================================================================
const songRhythmTimestamps = [0.9, 1.8, 2.7, 3.6, 4.4, 5.3, 6.2, 7.1, 8.0, 8.9, 9.7, 10.6, 11.5, 12.4, 13.3, 14.2, 15.0, 15.9, 16.8, 17.7, 18.6, 19.5, 20.3, 21.2, 22.1, 23.0, 23.9];
const arcadeSong = new Audio("audio.mp3");

let homeEngine = { isPlaying: false, currentScore: 0, hearts: 3, nextIndex: 0, tiles: [], loopId: null, startTime: 0, speed: 0.18, viewport: "homeGameViewport", scoreView: "homeGameScore", prefix: "home", hitZone: 294 };
let finalEngine = { isPlaying: false, currentScore: 0, hearts: 3, nextIndex: 0, tiles: [], loopId: null, startTime: 0, speed: 0.18, viewport: "gameViewport", scoreView: "gameScore", prefix: "", hitZone: 294 };

// FIXED: Added missing tracking popup visual renderer function
function triggerDynamicPopup(text, color, viewportId) {
    const viewport = document.getElementById(viewportId);
    if (!viewport) return;
    const popup = document.createElement("div");
    popup.innerText = text;
    popup.style.cssText = `position: absolute; top: 60%; left: 50%; transform: translate(-50%, -50%); color: ${color}; font-size: 1.5rem; font-weight: bold; font-family: 'Cinzel', serif; z-index: 100; pointer-events: none; animation: popupFade 0.4s ease forwards;`;
    viewport.appendChild(popup);
    setTimeout(() => popup.remove(), 400);
}

function initArcadeEngineInstance(eng) {
    eng.currentScore = 0; eng.hearts = 3; eng.nextIndex = 0; eng.isPlaying = true; eng.speed = 0.18;
    document.getElementById(eng.scoreView).innerText = "0";
    
    for(let h = 1; h <= 3; h++) {
        const heartEl = document.getElementById(`${eng.prefix}heart${h}`);
        if(heartEl) heartEl.innerText = "❤️";
    }
    
    eng.tiles.forEach(t => t.el.remove()); eng.tiles = [];
    arcadeSong.currentTime = 0;
    arcadeSong.play().catch(e => console.log("Arcade stream firing up."));
    
    eng.startTime = performance.now();
    eng.loopId = requestAnimationFrame((t) => runtimeInstanceLoop(t, eng));
}

function runtimeInstanceLoop(currentTime, eng) {
    if (!eng.isPlaying) return;
    const elapsed = (currentTime - eng.startTime) / 1000;

    if (eng.nextIndex >= songRhythmTimestamps.length && eng.tiles.length === 0) {
        stopInstanceSession(eng, true); return;
    }

    eng.speed = 0.18 + (elapsed * 0.002);
    if (eng.speed > 0.24) eng.speed = 0.24;

    if (eng.nextIndex < songRhythmTimestamps.length) {
        if (elapsed >= (songRhythmTimestamps[eng.nextIndex] - (294 / (eng.speed * 1000))) && eng.tiles.length === 0) {
            spawnInstanceNoteBlock(eng); eng.nextIndex++;
        }
    }

    for (let i = eng.tiles.length - 1; i >= 0; i--) {
        let tile = eng.tiles[i];
        tile.y = -75 + ((performance.now() - tile.spawnTime) * eng.speed);
        tile.el.style.transform = `translateY(${tile.y}px)`;

        if (tile.y > 395) {
            tile.el.remove(); eng.tiles.splice(i, 1);
            eng.hearts--;
            const heartEl = document.getElementById(`${eng.prefix}heart${eng.hearts + 1}`);
            if (heartEl) heartEl.innerText = "🖤";
            triggerDynamicPopup("MISS", "#ff4d4d", eng.viewport);
            
            if (eng.hearts <= 0) {
                stopInstanceSession(eng, false); return;
            }
        }
    }
    eng.loopId = requestAnimationFrame((t) => runtimeInstanceLoop(t, eng));
}

function spawnInstanceNoteBlock(eng) {
    const lane = Math.floor(Math.random() * 4);
    const container = document.getElementById(`${eng.prefix === "home" ? "homeLane" : "lane"}${lane}`);
    if (!container) return;
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("piano-tile");
    container.appendChild(tileDiv);
    eng.tiles.push({ el: tileDiv, lane: lane, y: -75, spawnTime: performance.now() });
}

function checkInstanceTapHit(laneId, eng) {
    const targets = eng.tiles.filter(t => t.lane === laneId);
    if (targets.length === 0) return;
    let target = targets[0]; if (target.y < -15) return;
    
    if (target.y >= eng.hitZone && target.y <= eng.hitZone + 40) {
        eng.currentScore += 15; triggerDynamicPopup("PERFECT", "#dfc095", eng.viewport);
    } else if (target.y >= eng.hitZone - 55 && target.y < eng.hitZone) {
        eng.currentScore += 10; triggerDynamicPopup("GOOD", "#e8a598", eng.viewport);
    } else {
        triggerDynamicPopup("MISS", "#ff4d4d", eng.viewport);
    }
    target.el.remove();
    eng.tiles = eng.tiles.filter(t => t !== target);
    document.getElementById(eng.scoreView).innerText = eng.currentScore;
}

function stopInstanceSession(eng, completed) {
    eng.isPlaying = false; cancelAnimationFrame(eng.loopId); arcadeSong.pause();
    document.getElementById(eng.prefix === "home" ? "homeActionGameBtn" : "actionGameBtn").innerText = "Start Song";
    concludeUnifiedArcadeSession(completed, eng);
}

// BINDINGS CONTROL WIRES
const homeScrollHint = document.querySelector("#countdownSection .scroll-hint");
if (homeScrollHint) {
    homeScrollHint.addEventListener("click", () => {
        const container = document.getElementById("landingContainer");
        if (container) container.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    });
}

const closeHomeTutorialBtn = document.getElementById("closeHomeTutorialBtn");
if (closeHomeTutorialBtn) {
    closeHomeTutorialBtn.addEventListener("click", () => {
        document.getElementById("homeGameTutorial").style.opacity = "0";
        setTimeout(() => document.getElementById("homeGameTutorial").style.display = "none", 400);
    });
}

const closeTutorialBtn = document.getElementById("closeTutorialBtn");
if (closeTutorialBtn) {
    closeTutorialBtn.addEventListener("click", () => {
        document.getElementById("gameTutorial").style.opacity = "0";
        setTimeout(() => document.getElementById("gameTutorial").style.display = "none", 400);
    });
}

const homeActionGameBtn = document.getElementById("homeActionGameBtn");
if (homeActionGameBtn) {
    homeActionGameBtn.addEventListener("click", () => {
        if(homeEngine.isPlaying) { stopInstanceSession(homeEngine, false); } else { initArcadeEngineInstance(homeEngine); }
    });
}

const actionGameBtn = document.getElementById("actionGameBtn");
if (actionGameBtn) {
    actionGameBtn.addEventListener("click", () => {
        if(finalEngine.isPlaying) { stopInstanceSession(finalEngine, false); } else { initArcadeEngineInstance(finalEngine); }
    });
}

window.addEventListener("keydown", (e) => {
    const lane = {'a':0,'s':1,'d':2,'f':3}[e.key.toLowerCase()];
    if (lane !== undefined) {
        if(homeEngine.isPlaying) checkInstanceTapHit(lane, homeEngine);
        if(finalEngine.isPlaying) checkInstanceTapHit(lane, finalEngine);
    }
});

document.querySelectorAll(".piano-lane").forEach(el => {
    const tap = (e) => {
        e.preventDefault();
        const lane = parseInt(el.getAttribute("data-lane"));
        if(homeEngine.isPlaying && el.classList.contains("home-lane")) checkInstanceTapHit(lane, homeEngine);
        if(finalEngine.isPlaying && el.classList.contains("final-lane")) checkInstanceTapHit(lane, finalEngine);
    };
    el.addEventListener("touchstart", tap);
    el.addEventListener("mousedown", tap);
});

// ==========================================================================
// --- 10. LEADERBOARD SYSTEM UNIFICATION & RECORD STORAGE ---
// ==========================================================================
function concludeUnifiedArcadeSession(completedSong, eng) {
    let rankTitle = eng.currentScore >= 250 ? "Rhythm Maestro 👑" : "Heartbeat Hero 💖";
    const overlay = document.createElement("div");
    overlay.id = "customScoreScreen";
    overlay.style.cssText = "position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(44,22,31,0.98); display:flex; flex-direction:column; justify-content:center; align-items:center; z-index:200; padding:20px; text-align:center;";
    overlay.innerHTML = `
        <h3 style="font-family:'Cinzel', serif; color:#dfc095; font-size:1.4rem; margin-bottom:5px;">${completedSong ? 'Finished!' : 'Game Over'}</h3>
        <p style="color:#e8a598; font-size:0.9rem; font-style:italic; margin-bottom:15px;">Rank: ${rankTitle}</p>
        <div style="font-size:2.8rem; font-weight:200; color:white; margin-bottom:15px;">${eng.currentScore} <span style="font-size:1rem; color:#dfc095;">pts</span></div>
        <input type="text" id="leaderboardNameInput" placeholder="Your name..." class="aesthetic-input" autocomplete="off" style="width:80%; max-width:240px; margin-bottom:15px;">
        <button id="saveScoreBtn" class="premium-btn gold">Save High Score</button>
    `;
    document.getElementById(eng.viewport).appendChild(overlay);
    document.getElementById("leaderboardNameInput").focus();
    
    document.getElementById("saveScoreBtn").addEventListener("click", () => {
        const name = document.getElementById("leaderboardNameInput").value.trim();
        if(name) {
            let records = JSON.parse(localStorage.getItem("unified_rhythm_scores")) || [{name: "Aakash", score: 100}];
            records.push({name: name, score: eng.currentScore});
            records.sort((a,b) => b.score - a.score);
            localStorage.setItem("unified_rhythm_scores", JSON.stringify(records.slice(0, 5)));
            
            displayLeaderboardsUnified();
            overlay.remove();
        }
    });
}

function displayLeaderboardsUnified() {
    let records = JSON.parse(localStorage.getItem("unified_rhythm_scores")) || [{name: "Aakash", score: 100}];
    const markup = records.map(r => `<li><span>${r.name}</span><strong>${r.score} pts</strong></li>`).join("");
    
    document.getElementById("homeLeaderboardView").innerHTML = markup;
    document.getElementById("leaderboardView").innerHTML = markup;
    
    document.querySelector(".id-home-board").style.display = "block";
    document.querySelector(".id-final-board").style.display = "block";
}
displayLeaderboardsUnified();