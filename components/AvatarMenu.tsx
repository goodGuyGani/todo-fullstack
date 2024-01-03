import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCookie } from "@/actions/session";

export default async function AvatarMenu(){
	const user = await getCookie();
	console.log(user);

	const name = user.get('name')?.value;
	function getInitials(fullName: string): string{
		const names = fullName.split(" ");
		const firstNameInitial = names[0][0].toUpperCase();
		const lastNameInitial = names.length > 1 ? names[names.length - 1][0].toUpperCase() : "";
		return`${firstNameInitial}${lastNameInitial}`;
	}

	return(
		<Avatar>
  			<AvatarImage src="" />
  			<AvatarFallback>{getInitials(name)}</AvatarFallback>
		</Avatar>

	)
}