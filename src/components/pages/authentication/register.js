import { useParams } from "react-router-dom"

export default function Register() {
    const { role } = useParams()
    return (
        <section class="h-screen">
            <div class="h-full">
                <div
                    class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                            <div class="w-full max-w-md space-y-8">
                                <div>
                                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                                    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up your account</h2>

                                </div>
                                <form class="mt-8 space-y-6" action="#" method="POST">
                                    <input type="hidden" name="remember" value="true" />
                                    <div class="-space-y-px rounded-md shadow-sm">
                                        <div>
                                            <label for="email-address" class="sr-only ">Email address</label>
                                            <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-5 px-5" placeholder="Email address" />
                                        </div>
                                        <div>
                                            <label for="password" class="sr-only">Password</label>
                                            <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-5 px-5" placeholder="Password" />
                                        </div>
                                        <div>
                                            <label for="password" class="sr-only">Re-enter Password</label>
                                            <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-5 px-5" placeholder="Re-enter password" />
                                        </div>
                                        <div>
                                            <label for="role" class="sr-only">Role</label>
                                            <input id="role" disabled name="role" value={role} type="text" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-5 px-5" placeholder="Role" />
                                        </div>
                                    </div>

                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                                        </div>

                                        <div class="text-sm">
                                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" class="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            Sign Up
                                        </button>
                                    </div>
                                    <p>Already have an account? <div className="cursor-pointer text-indigo-900 underline" onClick={() => {
                                        window.location.href = `/login/${role}`
                                    }}>Sign In</div></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div
                        class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full"
                            alt="Sample" />
                    </div>
                </div>
            </div>
        </section >
    )
}