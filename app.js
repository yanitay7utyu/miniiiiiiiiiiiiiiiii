let tg = window.Telegram.WebApp;

const app = {
    currentModel: null,
    models: {
        'gemini-pro': {
            name: 'Gemini Pro',
            description: 'مدل پیشرفته هوش مصنوعی با قابلیت‌های چندزبانه',
            icon: '🌟'
        },
        'gemini-2': {
            name: 'Gemini 2',
            description: 'نسل جدید مدل Gemini با درک عمیق متن و تصویر',
            icon: '🚀'
        },
        'gpt4o': {
            name: 'GPT-4o',
            description: 'مدل قدرتمند با توانایی تحلیل پیشرفته',
            icon: '🧠'
        },
        'claude': {
            name: 'Claude AI',
            description: 'هوش مصنوعی پیشرفته با قابلیت درک عمیق مفاهیم',
            icon: '🎯'
        }
    },

    init() {
        tg.expand();
        tg.enableClosingConfirmation();
        
        // تنظیم رنگ‌ها بر اساس تم تلگرام
        document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
        document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);
        
        this.renderMainPage();
        this.setupEventListeners();
    },

    renderMainPage() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="text-center mb-8 animate-fade-in">
                <h2 class="text-2xl font-bold mb-4">به دنیای هوش مصنوعی خوش آمدید</h2>
                <p class="text-gray-400">یک مدل را برای شروع گفتگو انتخاب کنید</p>
            </div>

            <div class="grid gap-6">
                ${Object.entries(this.models).map(([id, model]) => `
                    <div class="model-card" data-model="${id}">
                        <div class="flex items-center space-x-4">
                            <div class="text-3xl">${model.icon}</div>
                            <div>
                                <h3 class="text-xl font-bold gradient-text">${model.name}</h3>
                                <p class="text-gray-400">${model.description}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    setupEventListeners() {
        document.querySelectorAll('.model-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectModel(e.currentTarget.dataset.model);
            });
        });
    },

    selectModel(modelId) {
        this.currentModel = modelId;
        tg.MainButton.setText('شروع گفتگو با ' + this.models[modelId].name);
        tg.MainButton.onClick(() => this.startChat(modelId));
        tg.MainButton.show();
        
        document.querySelectorAll('.model-card').forEach(card => {
            card.classList.remove('selected');
            if (card.dataset.model === modelId) {
                card.classList.add('selected');
            }
        });
    },

    startChat(modelId) {
        // اینجا می‌تونید به بک‌اند متصل بشید
        tg.sendData(JSON.stringify({
            action: 'start_chat',
            model: modelId
        }));
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// تنظیمات Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});