const zodiacSigns=[
    "Capricorn", "Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"
];

const compliments = [
    "You have a heart of gold!",
    "Your smile lights up the room!",
    "You are stronger than you think!",
    "Your kindness is contagious!",
    "You are a ray of sunshine!",
    "You have an amazing sense of humor!",
    "Your creativity knows no bounds!",
    "You inspire everyone around you!",
    "Your positivity is infectious!",
    "You are doing an incredible job!",
    "You are wise beyond your years!",
    "You have a beautiful soul!",
    "You make the world a better place!",
    "Your energy is magnetic!",
    "You have an eye for beauty!",
    "You are pure magic!",
    "Your confidence is admirable!",
    "You are a breath of fresh air!",
    "You are destined for greatness!",
    "Your laughter is music to the ears!",
    "You are a true friend!",
    "You have a brilliant mind!",
    "You are wonderfully unique!",
    "You bring out the best in people!",
    "You are a masterpiece!",
    "Your ideas are valuable!",
    "You shine brighter than the stars!",
    "You make challenges look easy!",
    "Your passion is inspiring!",
    "You have a warrior's spirit!",
    "You are loved more than you know!"
];

const victimCardCompliments = [
    "You always help others, yet they rarely notice your kindness.",
    "You give your best, but people often take you for granted.",
    "You are so loyal, even when others don't deserve it.",
    "You forgive easily, even when you are the one hurting.",
    "You put others first, but they seldom do the same for you.",
    "You spread love, yet not everyone returns it.",
    "You are genuine in a world full of pretenders.",
    "You stay strong for others, even when you are falling apart.",
    "You always listen to others, but who listens to you?",
    "You deserve more appreciation than you receive.",
    "You trust easily, yet you are the one who gets betrayed.",
    "You are too pure for this harsh world.",
    "You fight silent battles no one even knows about.",
    "You carry others' burdens without complaining.",
    "You always choose peace, even when people hurt you.",
    "You believe in second chances, even for those who don't deserve them.",
    "You light up lives, but sometimes they leave you in the dark.",
    "You never give up on people, even when they give up on you.",
    "You always stay honest, even when lies would be easier.",
    "You deserve a world as kind as your heart."
];

const lifeRecommendations = [
    "Feed a street dog or cat today.",
    "Smile at a stranger and brighten their day.",
    "Call an old friend you haven't spoken to in a while.",
    "Thank your parents for everything they do.",
    "Plant a tree or a small plant.",
    "Donate unused clothes to charity.",
    "Spend a day without complaining.",
    "Write a gratitude note to yourself.",
    "Help someone without expecting anything in return.",
    "Meditate for 10 minutes today.",
    "Compliment someone genuinely.",
    "Pick up litter from a public place.",
    "Volunteer at a local organization.",
    "Cook a meal for someone you love.",
    "Read a positive book or article.",
    "Wake up early and enjoy the sunrise.",
    "Buy a meal for someone in need.",
    "Leave a positive note for someone to find.",
    "Listen to someone without interrupting.",
    "Donate books you no longer need.",
    "Forgive someone who hurt you.",
    "Learn something new today, however small.",
    "Spend time with nature — go for a walk.",
    "Turn off your phone and enjoy some offline time.",
    "Support a small local business.",
    "Give a genuine apology if you owe one.",
    "Encourage someone chasing their dreams.",
    "Treat yourself kindly — you deserve it.",
    "Be patient with yourself and others today.",
    "Share your happiness with someone else."
];

const futurePredictions = [
    "You will become a crorepati one day!",
    "You will travel to beautiful places around the world.",
    "You will achieve fame and success in your field.",
    "Your dreams will turn into reality soon.",
    "You will find the true love of your life.",
    "You will build a happy and peaceful home.",
    "A surprise opportunity will change your life.",
    "Your hard work will finally pay off big time.",
    "You will inspire thousands with your journey.",
    "You will discover hidden talents within yourself.",
    "You will live a life filled with happiness and health.",
    "Your positivity will attract wonderful people around you.",
    "You will start a business that becomes very successful.",
    "You will meet a mentor who will guide you to greatness.",
    "Your passion will make you a leader in your field.",
    "You will win something you have always wanted.",
    "You will overcome all challenges and rise even stronger.",
    "You will soon hear good news that will make you smile.",
    "Your future will be even brighter than you imagine.",
    "You will leave a positive mark on the world!"
];
  
const form=document.getElementById("astro-form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const Name=document.getElementById("name").value;
    const SurName=document.getElementById("surname").value;
    const Day=parseInt(Number(document.getElementById("date").value));
    const Month=parseInt(Number(document.getElementById("month").value));
    const Year=parseInt(Number(document.getElementById("year").value));

    const result=document.getElementById("result");
    
    const first_msg=`Hello ${Name} ${SurName} `;
    const second_msg=` Your ZodiacSigns is ${zodiacSigns[Month-1]}`;
    const third_msg=compliments[Day-1];
    let index=Math.floor(Math.random()*20);
    const fourth_msg= victimCardCompliments[index];
    index=(Name.length*SurName.length*Year)%30;     
    const fifth_msg=lifeRecommendations[index];
    index=(Day*Month*Year)%20;
    const sixth_msg=futurePredictions[index];

    result.innerText=`${first_msg}. ${second_msg}. ${third_msg} .${fourth_msg}\n Our Recommendation is : ${fifth_msg} .\nFuture Prediction is :  ${sixth_msg}`;

});
  