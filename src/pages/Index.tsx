import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 14, 39, 0.85), rgba(10, 14, 39, 0.85)), url('https://cdn.poehali.dev/projects/95039cd9-722f-474e-b0b0-cad19424189f/files/d4920f6f-5637-45da-933c-fc196b5ba103.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10"></div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-sm">
            <p className="text-primary font-semibold text-sm tracking-wider">ИННОВАЦИОННАЯ ТЕХНОЛОГИЯ</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Майнинг РУБЛЯ
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к революции цифровых инвестиций. 
            Получите приветственный бонус и начните зарабатывать уже сегодня.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all animate-glow"
              onClick={() => window.open('https://exclick.pro/?r=735411', '_blank')}
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              Начать сейчас
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/50 hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <Icon name="Info" className="mr-2" size={24} />
              Узнать больше
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { value: "24/7", label: "Техподдержка" },
              { value: "100%", label: "Безопасность" },
              { value: "∞", label: "Потенциал" }
            ].map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:border-primary/60 transition-all">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем передовые решения для максимизации вашего инвестиционного потенциала
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Мгновенный старт",
                description: "Получите приветственный бонус сразу после регистрации и начните зарабатывать без промедлений"
              },
              {
                icon: "Shield",
                title: "Гарантия безопасности",
                description: "Многоуровневая система защиты ваших инвестиций и персональных данных"
              },
              {
                icon: "TrendingUp",
                title: "Стабильный доход",
                description: "Проверенная система генерации прибыли с прозрачной статистикой"
              },
              {
                icon: "Users",
                title: "Реферальная программа",
                description: "Увеличивайте доход, привлекая новых участников в экосистему"
              },
              {
                icon: "Smartphone",
                title: "Мобильный доступ",
                description: "Управляйте инвестициями из любой точки мира 24/7"
              },
              {
                icon: "Award",
                title: "Надёжность",
                description: "Автоматическое распределение реферера обеспечивает справедливость системы"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:animate-float">
                    <Icon name={feature.icon} size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Истории успеха
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших инвесторов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Алексей М.",
                role: "Частный инвестор",
                image: "https://cdn.poehali.dev/projects/95039cd9-722f-474e-b0b0-cad19424189f/files/6af27994-fdaf-46d0-8f37-0e0e7a72f077.jpg",
                text: "За первый месяц работы с платформой я получил приветственный бонус и уже увидел реальную прибыль. Система работает как часы!",
                profit: "+47%"
              },
              {
                name: "Мария К.",
                role: "Предприниматель",
                image: "https://cdn.poehali.dev/projects/95039cd9-722f-474e-b0b0-cad19424189f/files/4bb3c277-83e6-4f45-8e83-85f4f6ce0e19.jpg",
                text: "Реферальная программа позволила мне создать пассивный доход. Рекомендую всем, кто ищет надёжные инвестиции.",
                profit: "+63%"
              },
              {
                name: "Дмитрий В.",
                role: "IT-специалист",
                image: "https://cdn.poehali.dev/projects/95039cd9-722f-474e-b0b0-cad19424189f/files/6af27994-fdaf-46d0-8f37-0e0e7a72f077.jpg",
                text: "Технология впечатляет! Прозрачная система, быстрые выплаты и отличная поддержка. Это именно то, что нужно современному инвестору.",
                profit: "+55%"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/60 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-2xl font-bold text-accent">{testimonial.profit}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Готовы начать зарабатывать?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам успешных инвесторов. Получите приветственный бонус прямо сейчас!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-bold px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all animate-glow"
            onClick={() => window.open('https://exclick.pro/?r=735411', '_blank')}
          >
            <Icon name="Rocket" className="mr-3" size={28} />
            Получить приветственный бонус
          </Button>
          <p className="text-sm text-muted-foreground mt-6 italic">
            * Если у вас не будет реферера, система автоматически назначит его
          </p>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Майнинг РУБЛЯ. Инновационная платформа для цифровых инвестиций.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
