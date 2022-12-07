<template>
<div>
<div class="grid lg:grid-cols-3 md:grid-cols-9 sm:grid-cols-9 grid-cols-8 grid-rows-1 border-r  gap-4">
        <Navbar/>
         <div class="bg-white border-r border-l lg:block lg:col-span-1 col-span-8 tweets overflow-y-auto">
                <button @click="doit"> doit</button>
                 
        </div>
        <!--Search Section-->
        <div class=" hidden lg:inline-block lg:col-span-1" >
 
        </div>
</div>
<div class="mobile-nav lg:hidden md:hidden sm:hidden fixed bottom-0 left-0 w-screen bg-white p-4 border-t border-twgrey-200">
  <div class="flex justify-center">
      <div class="py-2 px-7">
        <NuxtLink to="/home" class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </NuxtLink>
      </div>
      <div class="py-2 px-7">
        <NuxtLink to="/explore" class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
        </NuxtLink>
      </div>
      <div class="py-2 px-7">
        <NuxtLink to="/notifications" class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </NuxtLink>
      </div>
      <div class="py-2 px-7">
        <NuxtLink to="/messages" class="rounded-full p-1 pb-2 hover:bg-twgrey-200">
          <svg class="inline-block w-7"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </NuxtLink>
        
      </div>
    </div>
</div>
</div>

  
</template>

<script>
const tweets = [
  {
    text: "@robot55 when you be more serious "
  },
  {
    text: "@HoneyJune i was jus thinking dat ur name has june in it &amp; 1st june has been really bad for our frndship.... "
  },
  {
    text: "I have had a good weekend got my Blackberry fully up and running finally and celebrated my cuz 1st birthday. Wish we had a 4 day weekend "
  },
  {
    text: "I want to play in a movie "
  },
  {
    text: "@EmmaRileySutton  I love your granny already....we were given two ears for a reason. "
  },
  {
    text: "@ddlovato yeah! tsk! now I'm confused! "
  },
  {
    text: "@xxjadeyyxx are u going fri?! Yay i'll have a friend =D  what time are u getting there? "
  },
  {
    text: "@KrimsonKing I've been tryin for 2 days now   Twitter tryna tell me something about my new pic lol  Moral of the story: Stick w/ the old?"
  },
  {
    text: "@TraciKnoppe morning traci - how was the coffee?  It's 1pm here and I'm STILL not awake! Moved into new house yesterday SO tired and achy!"
  },
  {
    text: "@jaderoberts91 I always find I'm more irritable when I'm tired. Maybe good night's sleep will help things look better in morning. Prayers "
  },
  {
    text: "@flossa i want in on the kinky too. "
  },
  {
    text: "is re-scheduling my June calendar again thanks to contractors and an unexpected out-of-town meeting that just HAS to be done before 6/30 "
  },
  {
    text: "@nhoustonreed Thank you for the info Nikki! "
  },
  {
    text: "tummy ache "
  },
  {
    text: "@MissCay But the beard is no more! "
  },
  {
    text: "I have no idea which licenses are for what. uh oh "
  },
  {
    text: "Well tweets it's another sunny day, didn't have much rain but heard some of you got washed out around blighty, hope your all well! "
  },
  {
    text: "due to my obsession with all things 'titanic' and  ridiculous peeps making ï¿½ from it, this cheered me...good on you trevor beattie!"
  },
  {
    text: "Still aching from last night "
  },
  {
    text: "Eyebrows, pedi, and a new dress?  I'm thinking yes. Oh, and the movies tonight. I'm outta here..."
  },
  {
    text: "Ugh I so wanna go ooooooout now....bored shitless "
  },
  {
    text: "Where did the wind come from? And why am I still awake? "
  },
  {
    text: "I feel really bad about spamming  #trackle will you give me an iphone so my followers wont have to keep watching me beg you for one?"
  },
  {
    text: "@aminorjourney I can understand why "
  },
  {
    text: "@vamps_R_us Link to the chat doesn't work  #twiparty"
  },
  {
    text: "Just wish I could repair my F6! Polar repair service just won't pick up the phone when I call "
  },
  {
    text: "@ilovepayday Get 100 followers a day using www.tweeteradder.com Once you add everyone you are on the train or pay vip "
  },
  {
    text: "I'm hung over ahhh hang overs suck magerly "
  },
  {
    text: "ohhhhh! i got tickets to a concert i really wanted to see, but they only had 1 left! going alone "
  },
  {
    text: "I do not function well when I get woken up at 5am "
  },
  {
    text: "@Faith03 I've been getting responses about the things that go one in Church.  "
  },
  {
    text: "talking to gf on msn and she misspelled a bunch of stuff and went &quot;whats wrong with me&quot; and i replied &quot;downs syndrome&quot; and now shes mad "
  },
  {
    text: "Rachel Alexandra isn't being run in the Belmont...now I have to rethink my bets for next weekend. "
  },
  {
    text: "and they also blocked flickr and hotmail .. whats wrong?    let's figure it out .. "
  },
  {
    text: "@KitchenDani ...and Chisholm it should've remained! I miss the Clayton campus. "
  },
  {
    text: "@rulesaremyenemy 4? Crazy!! I can't even listen to a podcast while reading webcomics. Only 2 things! Multitasking is hard. "
  },
  {
    text: "@TherealGage  sweet deal"
  },
  {
    text: "OC..then sleep to start another week of class "
  },
  {
    text: "@NathalieNL That's so cool! My camera's only got 5 megapixel, so that's not enough for getting the pics as posters "
  },
  {
    text: "@tuttle88 I know how you feel. I want to make a town of slacker kleptomaniacs "
  },
  {
    text: "@kawnee37 lmfao. You told me about it hahaha "
  },
  {
    text: "If you know me from sites as livejournal, index, hogyvolt.blog.hu or sorozatjunkie or ICON or else you're free to follow me and say hello "
  },
  {
    text: "Playing soccer "
  },
  {
    text: "In bed, sick  hate throwing up."
  },
  {
    text: "why can't I see a video on youtube made by a person living in the same country I live?   I officially hate country restrictions."
  },
  {
    text: "@WeTheTRAVIS Mail it to yourself? "
  },
  {
    text: "@kaffee Who? What? "
  },
  {
    text: "Have a great and blessed sunday! "
  },
  {
    text: "Lost my sunglasses in the ocean! "
  },
  {
    text: "@JuiCybella  your sleep as well uh? Well GM when u wake up "
  },
  {
    text: "@idkDiVAS my bros bestfriend had 1 of those... it was white I believe n they gave everyone diff colored markers to sign it with  ..."
  },
  {
    text: "@WeareTHATfamily Oh no! I hope he's OK. Not a fun way to start your birthday "
  },
  {
    text: "Stairs = very bad! Plus I miss my puppies  "
  },
  {
    text: "Blsckberry is stupid with stuopidly small keys!but I want one  ict sucks"
  },
  {
    text: "I ate till it hurt last night "
  },
  {
    text: "@enginesfailing then aid critics are going to be like &quot;another journey through Sams Town?&quot; or some shit like that "
  },
  {
    text: "just had a phone call with amy, spoke civily its all good ... going to watch E! News now ... someone pissed on my bed at my mums ahaha "
  },
  {
    text: "Never trust untrustworthy people "
  },
  {
    text: "@PatricD ahhh now I get it! You broke CBs Hammer?  Mr. Two-Left-Thumb on two right hands.."
  },
  {
    text: "Wow, one more day and I'm outta here. Time went by just TOO fast. Had to say goodbye to Nicole today. Saddest thing that's gonna happen. "
  },
  {
    text: "46 long minutes talking to my FAVORITE cousin "
  },
  {
    text: "This wallpaper has taken me 2 hours to make. It's the best I've ever made.  Unfortunately IDK what sources I used to post it online. "
  },
  {
    text: "@ton3s I'll be in Wellywood that weekend "
  },
  {
    text: "@RoyalCutiie Awwwww! Missing ur life!  We have soooo many things to do that weekend! Hopefully you don't get sick this time!!! Lmao!"
  },
  {
    text: "@greyrider Can't wait to see what you think of it first hand  You're more analytical than most people that have recommended it..."
  },
  {
    text: "Wish I was in Dallas @ the JB concert "
  },
  {
    text: "im really quite bored... "
  },
  {
    text: "@Jaycee369 greeeeeeat. it took me a long time to think of those "
  },
  {
    text: "Think am going down with the winter flu - Three days down the drain "
  },
  {
    text: "@serenaamadea haha yes he is ser. i just can't wait for lee min ho's birthday "
  },
  {
    text: "hates not being able to see his monitor. I have about 25 minutes before the sun is not blinding me "
  },
  {
    text: "@lizasperling as long as the old camera can use SDHC cards (higher than 2GB) and it's not too old. Try it. Why wait "
  },
  {
    text: "anime studio is hard to use "
  },
  {
    text: "@garryinnorfolk @tobiefysh Still none received by text as yet!  I do like the idea of vodafone eating my tweets. "
  },
  {
    text: "@OfficialJoBros This is a link of a photo, hope you'll reply to it  http://twitpic.com/4e5pw"
  },
  {
    text: "Picking up my hori arcade stick which i bought on ebay. No more hurting fingers "
  },
  {
    text: "Was kinda looking forward to going to Cebu. "
  },
  {
    text: "is going for Terminator Salvation at Pyramid, last call for people interested  *public service announcement*"
  },
  {
    text: "@bbusschots I summoned the spirit of Steve Jobs to oversee your installation.  "
  },
  {
    text: "@coffeequeen Yay, glad it's working!  I need to stick to mine today "
  },
  {
    text: "It's just one of those good days... "
  },
  {
    text: "is...just...ugh. "
  },
  {
    text: "Dreading Father's Day. Another reminder of Mr Deadbeat Dad and the damage he does, every day. Grr  He doesn't deserve to have daughter."
  },
  {
    text: "@smithcor Oh my God. "
  },
  {
    text: "@KLoop83 pretty much everything right now. message me on myspace cuz the mobile version for this blows. i gotta do some work here "
  },
  {
    text: "@_AshleyNicole_ Ack, I know the feeling. "
  },
  {
    text: "@UniqueBlossom And so excited M&amp;M are finally back. I missed them. Though, not liking the spoilers for the week of the 6th. "
  },
  {
    text: "Back to reading transcripts for article on NOLA. Makes me so sad for my city. "
  },
  {
    text: "ahh another call from the dirty maq.... must be friday in tofino. and nothing to smoke after work "
  },
  {
    text: "@miss_flora haha! I'm still awake. Girl why you up so early  I'm writing 2 final papers for my polisci class due at 1:30! and I'm doneee"
  },
  {
    text: "Did a huge system clean up on my mac  and some deskmodding, looks beautiful!"
  },
  {
    text: "Barn with everyone. "
  },
  {
    text: "@christinakawaii oh really?  dang i'll have to turn it on more often!  if you or paige aren't on, nobody for me to talk to on there "
  },
  {
    text: "Im sorry but Jon Gosselin is a big huge JERK!!!!!!  I hated todays episode.... i dont think ill watch anymore..."
  },
  {
    text: "@PinkyBoo2 I know i miss the lrv,drinking and you "
  },
  {
    text: "@Austin_Butler Fill Me Innnn ;) Or just come to Sydney to un-bore meeee. just finished my exams, give me a reason to smile  xx"
  },
  {
    text: "@PandaCatBaby: yeah ebay is just ridiculous! the worst thing is they are books for my mum so i can't even sell them elsewhere "
  },
  {
    text: "@caige my birthday is tuesday the same day your video is out. how rad is that? "
  },
  {
    text: "One of &quot;my&quot; researchers is speaking. I'm so proud. "
  },
  {
    text: "Embarq DSL has been down since last nite. This is me not happy. "
  },
  {
    text: "@SimoneValentee Pretty good, thank you  #imperfectangel"
  },
  {
    text: "Thought I was over my food poisoning... It's worse now - thanks Egypt! "
  },
  {
    text: "@sakurajewellery  Sweet Beans! Thanks! "
  },
  {
    text: "ii wish summer just came along , school finished and there was no more HOMEWORK ! "
  },
  {
    text: "so glad its sunny now, but have got an infection in my eye "
  },
  {
    text: "@sampan22 I'm good hun!! U??? IVF is finished..It didn't work!!  It's all good though..Gonna go on my hols..Then get a job!! Cont:"
  },
  {
    text: "@MaggieA  Can u stand on your head NOW?  "
  },
  {
    text: "Awake for a meeting "
  },
  {
    text: "@claycourt Stackars oss assÃ¥! "
  },
  {
    text: "Found three baby birds dumped in the same place in the yard. Moved them to a safer place. Two of them did not make it through the night "
  },
  {
    text: "It's all about who you are, &amp; who you aren't. &amp; not about what you should be, or about what you shouldn't do. Good night. "
  },
  {
    text: "Taylor Swift - You Belong To Me "
  },
  {
    text: "Meet n greet right now.  Love yalls hugs. (via @DonnieWahlberg) &lt;- you should get some hugs on my side of the pond "
  },
  {
    text: "@jlneveloff CONGRATS on graduating college! "
  },
  {
    text: "@yaboyskeete I dnt kno where to look "
  },
  {
    text: "bout to graduate on the 18th  supppppaaaa turnnnnt this weekend !"
  },
  {
    text: "@myk14 Thanks buddy *high fives* hehe "
  },
  {
    text: "I home on teh couch  sighhhh. Left arm is soreeeee. Workin it out. Full though. Comfy. Ahhhh. &lt;3 asdfghjkl"
  },
  {
    text: "@pixelmatrix Because I can't see it. Colorblind FAIL "
  },
  {
    text: "am disappointed to find my triple mocha appears to have no actual mocha part in it "
  },
  {
    text: "@gypsytrading Northwestern Arkansas, which is rapidly becoming a swamp land after this soggy winter and spring.  "
  },
  {
    text: "says Boom Clap Boom De Clap De Clap      Let Me Tell You Bout Hard Work, Mininum Wage With A Baby On The Way"
  },
  {
    text: "@luvsalmon15 I'm with you girl! I'm more scared of wasps &amp; a few other things than earthquakes- sweet dreams! "
  },
  {
    text: "@joshgracin Did you get stung?  The bees and bugs in the South are horrible.  Hope you weren't attacked too badly "
  },
  {
    text: "@riskybusinessmb @thepistol @theroser @iamthecommodore congrats. you guys are my 900th tweet "
  },
  {
    text: "Don't accept your dog's admiration as conclusive evidence that you are wonderful. ~Ann Landers "
  },
  {
    text: "@DonnieWahlberg Haha so true! I had my camera all ready! But No DDub  hehe Its ok I know Boston is way too crazy! We luv ya 2 much! twugs"
  },
  {
    text: "@DaMatrixDWI the song up there for you to hear "
  },
  {
    text: "@DominicLopez_  I know, I'm so proud of myself too! And wow, you make me feel guilty. I wasn't aware i was that depressing. "
  },
  {
    text: "Decided to try Graham Norton's new show Totally Saturday on BBC1/HD its quite Terrible Sadly "
  },
  {
    text: "Not to worry, noone got that one. Next question starts in 1 minute, get your thinking caps on "
  },
  {
    text: "Perilous plunge, Ghostrider r closed!! "
  },
  {
    text: "wants to have her nails done.. And can't wait for Rob to get here so we can watch Angels and Demons na! Err "
  },
  {
    text: "Late for the monthly meeting in my department, but it's OK cause it was a hands on new media seminar with our journalists that delayed me "
  },
  {
    text: "Loved today @thebamboozle.   Got to see demi and I stereo skyline, &lt;3"
  },
  {
    text: "well i thought i had hacked into garys blog but i did not he had another blog he started at the beginning and that is the one i got into "
  },
  {
    text: "@cutestkidever feel better tomorrow!! Kind of sore today myself. "
  },
  {
    text: "I love when people tweet when they meant to text or dm! "
  },
  {
    text: "@tommcfly Hey tom. I seen you couple months ago at the newcastle gig and that was my 7th time  xxx"
  },
  {
    text: "@GinaDeAngelo ha, definitely not vegan. I'm drinking it, still alive too. All is well "
  },
  {
    text: " no one got me my damn oreos."
  },
  {
    text: "My mom just told me to move back to california... So I'm gonna...  I hate my life."
  },
  {
    text: "getting a shower then going to the ortho... "
  },
  {
    text: "Good morning Twitterland. Apparently summer weather was only teasing us. Now we are back to Spring. "
  },
  {
    text: "@jarod73 And I love Michael Cera "
  },
  {
    text: "mad at my babymomma @justvonecia ...she was cheatin on me last nite!!! "
  },
  {
    text: "@Adrienne_Bailon You don't need to get fit...you're beautiful already "
  },
  {
    text: "@tankgirltaz have fun this afternoon in the tat shop "
  },
  {
    text: "listening to: Tanpa by Sixth Sense "
  },
  {
    text: "I'm not excited about the new iPhone, I think I've outgrown it.  In fact, I'm too good for Apple now-OH GOD STEVE COME BACK WE MISS YOU!! "
  },
  {
    text: "hot tub with @heathergrins &amp; @catrific "
  },
  {
    text: "is going to the hairdresser and hopes it will make her feel better..Nedds it after last night... "
  },
  {
    text: "off to bed now... nytynyt tweety tweet tweets... "
  },
  {
    text: "Follow @kaitlynangela. She's new to hollywood. I'll be with her tomorrow.  If i have too..I'll tweet from her page."
  },
  {
    text: "Today's show should be interesting.  Hope I don't pass out in the lot. "
  },
  {
    text: "@charlief just say your tweet at  #followfriday thanks,, &quot;and the awsome&quot; cheers xD you is awsome to. lol "
  },
  {
    text: "@limelightfood I saw that. As soon as I asked, I got followed by a few Salt Lake City twitter accounts, it was amusing. "
  },
  {
    text: "offline... sleep early. nytes all "
  },
  {
    text: "@BuzzEdition that is so sweet  Thanks for sharing the #FF blogpost there"
  },
  {
    text: "Change of plans. Getting LVATT tomorrow? Parents are working all day  No one's home to drive me."
  },
  {
    text: "@TeamDaveDays  uhmm .. i dont no lol .. im having my dinner lol  x"
  },
  {
    text: "Sigh they look mean "
  },
  {
    text: "4 steps you can do 2 make money while your tweeting  www.TwitterSecretCash.com"
  },
  {
    text: ") @hoiancute  without &quot;e&quot; , from @hoatle   , good thinking "
  },
  {
    text: "@patiokitty brrr cold shower!! I've only experienced that once in my life and it was brutal!! I think I will try the tea, or maybe coffee "
  },
  {
    text: "ok well maybe while the boys performed, i was packing. "
  },
  {
    text: "is glad you got home safely.  you are a rockstar."
  },
  {
    text: "@CherylHarrison I am spending the rest of the night chillin out, sorry hun "
  },
  {
    text: "@NatMcB78 It was lovely to meet you too Natalie, happy to make it a regular thing  #tweetdeck"
  },
  {
    text: "http://twitpic.com/661b5 - Bought a new jacket today. And cool pearl necklace "
  },
  {
    text: "@Holly_Baugh those are awesome. Thanks "
  },
  {
    text: "&lt;----has not had coffee yet "
  },
  {
    text: "@Maddie_14 Paris!!  ..because I took French!! lol"
  },
  {
    text: "@lemongeneration bronx mowgli indeed is a nice name and of course very unique. "
  },
  {
    text: "I really need a paid account on LJ. too many icons so little space "
  },
  {
    text: "@AubreyODay Haha! Celtics all day!!! "
  },
  {
    text: "@darthweef you just made me cry a little. "
  },
  {
    text: "hate when my parents leave  but great weekend and lots of delicious food lol not to mention a Hog rally hahaha"
  },
  {
    text: "going to buckle down and get some serious work done here! "
  },
  {
    text: "@ms_cornwall hiya - how are you today? "
  },
  {
    text: "I still have to paste my flat tire, but it's still raining and I don't have a garage "
  },
  {
    text: "http://ping.fm/p/Gk72N - Good morning, it's a beautiful day! "
  },
  {
    text: "nightmare - feel like a house IBS giving me grieve - eating really badly - no will power !!  called ww leader for support - lovely lady"
  },
  {
    text: "seeing @coldplay tonight!!! with my momma!!! "
  },
  {
    text: "@lillaszalay shut up  i already admitted that im drunk  happy bday dad!!!!"
  },
  {
    text: "@Jennifalconer Twilight deffently  New Moon film looks very good also "
  },
  {
    text: "Yippeee I made $1500 predicting Nadal's French Open exit  http://tinyurl.com/mp3v6l"
  },
  {
    text: "@PlanetEels it's better to not say anything at this point  shattered!!!!"
  },
  {
    text: "@anrserge Its My Time is my jam.  "
  },
  {
    text: "@Fabulous8212 it is the best sleeping! unfortunately i've got stuff to do today  so sleep's gotta wait"
  },
  {
    text: "trying to install Redmine to nginx is it possible? "
  },
  {
    text: "@Emily_Webgains you should try a pain-au-chocolat from @albionsoven it's almost the same size as a cow. Just ask the guys @stinkdigital "
  },
  {
    text: "@RayGarton I'm glad I made you chuckle. "
  },
  {
    text: "@ellerulz I loved it, thanks for spreading the joy! "
  },
  {
    text: "Running, getting a couple things done then LAYING out in the beaUtiful weather! "
  },
  {
    text: "Almost dropped my iphone screen first on tile!!! "
  },
  {
    text: "believes that creativity  in cooking is only limited to your imagination... guess that applies for most things too... like photography "
  },
  {
    text: "God Daddy has once again blessed me with a new phone and computer for the right price at the right time  so privileged to be his daughter!"
  },
  {
    text: "@MilesKane3 Dude, i know!  We are already in the middle of the year. Autumn wont seem too far away."
  },
  {
    text: "so hungry.. and my mom wants us to go out somewhere with @_savannahXo.. but shes doing school, and then theres practice! "
  }
]
import { projectFirestore } from '@/firebase/config';
import {timestamp} from '@/firebase/config.js'
export default {
   data(){

   },

   methods:{
    async doit(){
        // get all user ids from firestore
        const users = await projectFirestore.collection('users').get()
        const usersIds = users.docs.map(doc => doc.id)
        
        // loop tweets
        for (let i = 1; i < tweets.length; i++) {
            const tweet = tweets[i];
            // pic a random user
            const randomUser = usersIds[Math.floor(Math.random() * usersIds.length)]
            // insert tweet to firestore
            await projectFirestore.collection('tweets').add({
                content: tweet,
                uid: randomUser,
                createdAt: timestamp(),
                likes: 0,
                retweets: 0,
                comments: 0,
                replyTo: null,
            })
        }
    }
   }
}
</script>
