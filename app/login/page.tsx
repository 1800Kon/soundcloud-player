"use client"

import { Avatar, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function Login() {
    return (
        <div className="bg-white flex align-middle justify-center">
            <Card className="w-auto">
                <CardHeader className="grid justify-items-center">
                    <Avatar showFallback src='https://developers.soundcloud.com/assets/logo_big_white-65c2b096da68dd533db18b9f07d14054.png' />
                    Login with SoundCloud
                </CardHeader>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        </div>
    )
}
