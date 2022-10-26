import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';

import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Logo } from './assets/logo';
import { TextInput } from './components/TextInput';

import './styles/global.css';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

function App() {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    alert(JSON.stringify(formValue, null, 2));

    setFormValue({
      email: '',
      password: '',
      remember: false,
    });
  };

  return (
    <div className="min-h-screen p-4 bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={formValue.email}
              onChange={(e) =>
                setFormValue((current) => ({
                  ...current,
                  email: e.currentTarget.value,
                }))
              }
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
              value={formValue.password}
              onChange={(e) =>
                setFormValue((current) => ({
                  ...current,
                  password: e.currentTarget.value,
                }))
              }
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={formValue.remember}
            onCheckedChange={(checked) =>
              setFormValue((current) => ({
                ...current,
                remember: Boolean(checked),
              }))
            }
          />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4" onClick={handleSubmit}>
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}

export default App;
