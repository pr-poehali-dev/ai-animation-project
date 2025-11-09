import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">AI Studio</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О студии</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-primary transition-colors">Процесс</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Создаём <span className="text-gradient">магию анимации</span> с искусственным интеллектом
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Фантастические персонажи, музыкальные клипы и волшебные видеоролики — всё это реальность с нейросетями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('process')} className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                <Icon name="Play" className="mr-2" size={20} />
                Как мы работаем
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О студии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы объединяем творчество и технологии для создания уникального визуального контента
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-card border-primary/20 hover-scale group cursor-pointer">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Icon name="Wand2" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Анимированные персонажи</h3>
              <p className="text-muted-foreground">
                Создаём фантастических гибридов животных и сказочных существ с помощью нейросетей
              </p>
            </Card>

            <Card className="p-8 bg-card border-secondary/20 hover-scale group cursor-pointer">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                <Icon name="Music" size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Музыкальные клипы</h3>
              <p className="text-muted-foreground">
                Производим яркие музыкальные видео и клипы с захватывающей визуализацией
              </p>
            </Card>

            <Card className="p-8 bg-card border-accent/20 hover-scale group cursor-pointer">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Icon name="Gift" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Видеопоздравления</h3>
              <p className="text-muted-foreground">
                Делаем прикольные и душевные анимированные поздравления для любого праздника
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/2a8ef0df-eb8e-48d0-9c18-e1269742842c/files/c8c65d5b-7489-4489-a541-d20358fe3f65.jpg" 
                alt="Фантастический персонаж" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <p className="text-lg font-semibold">Волшебные персонажи</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/2a8ef0df-eb8e-48d0-9c18-e1269742842c/files/01744837-b4c4-421f-af46-92a5a42be1bb.jpg" 
                alt="AI студия" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <p className="text-lg font-semibold">Технологии AI</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/2a8ef0df-eb8e-48d0-9c18-e1269742842c/files/eb125d73-6f37-45d5-ab7e-656139b18368.jpg" 
                alt="Музыкальная анимация" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <p className="text-lg font-semibold">Музыкальная магия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс создания</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От идеи до готового шедевра — простой и понятный путь
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Идея и концепт",
                description: "Обсуждаем вашу задумку, определяем стиль и настроение будущего ролика",
                icon: "Lightbulb"
              },
              {
                step: "02",
                title: "AI-генерация",
                description: "Нейросети создают уникальных персонажей и визуальные элементы по вашему запросу",
                icon: "Cpu"
              },
              {
                step: "03",
                title: "Анимация",
                description: "Оживляем персонажей, добавляем движение и динамику в каждый кадр",
                icon: "Film"
              },
              {
                step: "04",
                title: "Музыка и звук",
                description: "Подбираем идеальное звуковое сопровождение для создания атмосферы",
                icon: "Music"
              },
              {
                step: "05",
                title: "Финальная магия",
                description: "Собираем всё вместе, добавляем эффекты и полируем до совершенства",
                icon: "Sparkles"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex gap-6 items-start animate-slide-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors glow">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-bold text-primary mb-2">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы создать что-то волшебное? Напишите нам!
              </p>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Как к вам обращаться?" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email или Telegram</label>
                  <Input placeholder="Как с вами связаться?" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о вашем проекте</label>
                  <Textarea 
                    placeholder="Опишите идею, стиль, настроение..." 
                    className="bg-background/50 min-h-32"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 glow">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex justify-center gap-6">
                  <Button variant="outline" size="icon" className="hover-scale">
                    <Icon name="Mail" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-scale">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-scale">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-scale">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-gradient">AI Studio</div>
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 AI Animation Studio. Создаём невозможное возможным.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Политика</Button>
              <Button variant="ghost" size="sm">Условия</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
