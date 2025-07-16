#### Criar o projeto

#### Mudar o favicon

#### Conectar o banco

#### Usar a doc

#### Gerar o home com supabase

#### Shadcn
npx shadcn@latest init

#### Supabase

npm install @supabase/supabase-js

* Client
````
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
````

#### Conexão

https://jyrimgynflxmtjhhkyrs.supabase.co

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cmltZ3luZmx4bXRqaGhreXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4ODYwNzIsImV4cCI6MjA1NTQ2MjA3Mn0.H_5D1uvr2cLHYxa-bvk8bpc-ya6IPTcoPKx2cONIa00