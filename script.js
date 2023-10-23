const events = [
	{
		id: 1,
		title: 'Investing Tank',
		dateTime: new Date('2023 October 15 12:00:00'),
		image:
			'https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/06/Untitled-1024-%C3%97-683px-3-1.jpg.webp',
		faq: [
			{
				question: 'What is the date of event?',
				answer: 'The event will be held on 2023 October 15 12:00:00',
			},
			{
				question: 'Whom to contact for any Queries?',
				answer: 'For any queries related to the event contact 9696969696',
			},
		],
	},
	{
		id: 2,
		title: 'Hackathon',
		dateTime: new Date('2023 November 10 12:00:00'),
		image:
			'https://res.cloudinary.com/devex/image/fetch/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b',
        faq: [
            {
                question: 'What is the date of event?',
                answer: 'The event will be held on 2023 November 10 12PM'
            },
            {
                question: 'Where will the event be held?',
                answer: 'The event will be held at APJ-11 NSUT'
            },
            {
                question: 'What will be the duration of the event?',
                answer: 'The duration of the event will be 48 hours'
            }
        ]
	},
	{
		id: 3,
		title: 'Robo Wars',
		dateTime: new Date('2023 December 22 12:00:00'),
		image:
			'https://i0.wp.com/roboticsindia.live/wp-content/uploads/2021/03/SAVE_20210324_194657.jpg?resize=800%2C450&ssl=1',
        faq: [
            {
                question: 'What is the date of event',
                answer: 'The event will be held on 2023 November 10 12PM'
            },
            {
                question: 'what is the dimention and weight of robots allowed?',
                answer: 'The dimension should not exceed 30cm*30cm and weight should not exceed 5 kgs'
            },
            {
                question: 'Whom to contact?',
                answer: 'For any queries related to the event contact 6969696969'
            }
        ]
	},
	{
		id: 4,
		title: 'UI/UX Workshop',
		dateTime: new Date('2023 October 29 13:00:00'),
		image:
			'https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg',
		faq: [
			{
				question: 'What is the date of event',
				answer: 'The event will be held on 2023 October 29 13:00:00',
			},
			{
				question: 'What technologies will be taught?',
				answer: 'The workshop will cover basics of figma,wireframe,prototyping',
			},
		],
	},
];

console.log(events[0].dateTime);

const app = document.querySelector('#app');

const url = new URL(location.href);
const params = new URLSearchParams(url.search);
let eventId = params.get('event');

if (eventId != null) {
	let event = events[eventId - 1];
	// If there is an event in the url
	if (!event) {
		// Event not found
		app.innerHTML = "<a href='/'><div class='error'>Event not found</div></a>";
	} else {
		// Event found
		const div = document.createElement('div');
		div.classList.add('card', 'large');
		let img = document.createElement('img');
		img.src = event.image;
		let div1 = document.createElement('div');
		div1.classList.add('title');
		div1.innerHTML += event.title;
		let div2 = document.createElement('div');

		var countDownDate = event.dateTime.getTime();

		var x = setInterval(function () {
			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="demo"
            div2.innerHTML = 'Event starts in ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
			if (distance < 0) {
				clearInterval(x);
				div2.innerHTML = 'Event Ended';
			}
		}, 1000);
		const div3 = document.createElement('div');
        var content = '';
        event.faq.map(({ question, answer }) => {
            content += `
            <li>
                <input type="checkbox" checked >
                <i></i>
                <h2>${question}</h2>
                <p>${answer}</p>
            </li>`
        })
        div3.innerHTML = `
        <h1 class="faq-heading">FAQs</h1> 
        <ul>
        ${content}
        </ul>
        `

		const btn = document.createElement('button');
		btn.classList.add('btn');
		btn.innerHTML = 'Back';
		btn.addEventListener('click', () => (location.href = '/'));
		app.appendChild(btn);

		div2.classList.add('date');

		div.appendChild(img);
		div.appendChild(div1);
		div.appendChild(div2);
		div.appendChild(div3);
		app.appendChild(div);
	}
} else {
	// If there is no event inside the url
	events.map(event => {
		const a = document.createElement('a');
		a.href = `/?event=${event.id}`;
		const div = document.createElement('div');
		div.classList.add('card');
		let img = document.createElement('img');
		img.src = event.image;
		let div1 = document.createElement('div');
		div1.classList.add('title');
		div1.innerHTML += event.title;
		let div2 = document.createElement('div');

		var countDownDate = event.dateTime.getTime();

		var x = setInterval(function () {
			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="demo"
			div2.innerHTML =
				days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
			if (distance < 0) {
				clearInterval(x);
				div2.innerHTML = 'Event Ended';
			}
		}, 1000);

		div2.classList.add('date');

		a.appendChild(img);
		a.appendChild(div1);
		a.appendChild(div2);
		div.append(a);
		app.appendChild(div);
	});
}
