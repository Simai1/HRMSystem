export default {
    registration: {
        subject: 'Registration',
        template: (link: string) =>
            `<h1>Пожалуйста подтвердите свою почту перейдя по ссылке ниже:</h1>
			<p>${link}</p>`,
    },
};
