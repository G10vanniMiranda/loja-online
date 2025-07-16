'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Produto = {
  id: number
  nome: string
  descricao: string | null
  preco: number
  condicao: string | null
  categoria: string | null
  imagem_url: string | null
  vendedor_nome: string | null
}

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    fetchProdutos()
    verificarUsuario()
  }, [])

  async function fetchProdutos() {
    const { data, error } = await supabase.from('produtos').select('*')
    if (!error && data) setProdutos(data)
  }

  async function verificarUsuario() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
  }

  async function handleLogin() {
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">🛒 Loja Online</h1>
        {user ? (
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">Olá, {user.email}</p>
          </div>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
      </header>

      {/* Conteúdo */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Produtos disponíveis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={produto.imagem_url || '/placeholder.jpg'}
                alt={produto.nome}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{produto.nome}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {produto.categoria} | {produto.condicao}
                </p>
                <p className="text-blue-600 font-bold text-lg">
                  R$ {produto.preco.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Vendido por: {produto.vendedor_nome || 'Anônimo'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
