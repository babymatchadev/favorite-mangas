export type manga = {
	title: string
	author: string
	image: string
	description: string
	toms: number
}

export const favoriteMangas: manga[] = [
	{
		title: "Project Cosplay",
		author: "Shinichi Fukuda",
		image: "https://ecsmedia.pl/c/projekt-cosplay-tom-1-w-iext123230929.jpg",
		description: "The manga tells the story about girl who loves cosplay",
		toms: 10,
	},
	{
		title: "Dorohedoro",
		author: "Q Hayashida",
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Dorohedoro_01.jpg/220px-Dorohedoro_01.jpg",
		description:
			"The manga tells the story about Caiman, an amnesic man disfigured by magic, who tries to recover both his original face and memories about his past.",
		toms: 23,
	},
	{
		title: "The Way of the Househusband",
		author: "Kousuke Oono",
		image:
			"https://upload.wikimedia.org/wikipedia/en/f/f7/The_Way_of_the_Househusband.jpg",
		description:
			"Tatsu, an infamous and feared yakuza boss nicknamed the Immortal Dragon, retires from crime to become a househusband so that he can support Miku, his kyariaūman wife. The episodic series depicts a variety of comedic scenarios, typically wherein Tatsu's banal domestic work as a househusband is juxtaposed against his intimidating personality and appearance, and his frequent run-ins with former yakuza associates and rivals",
		toms: 11,
	},
	{
		title: "Spy x Family",
		author: "Tatsuya Endo",
		image: "https://fwcdn.pl/fpo/17/24/10011724/8008207.3.jpg",
		description:
			"The story follows a spy who has to build a family to execute a mission, not realizing that the girl he adopts as his daughter is a telepath, and the woman he agrees to be in a marriage with is a skilled assassin.",
		toms: 10,
	},
]
