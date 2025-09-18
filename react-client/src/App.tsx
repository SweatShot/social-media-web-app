import { Button } from "@heroui/react"

export default function App() {
  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-blue-600 underline">
        Hello Redux + HeroUI + Tailwind!
        <Button color="primary">Press me</Button>
      </h1>
    </div>
  )
}
