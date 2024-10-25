"use strict"

if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Крок 0. Введення даних, позначення величин

		class Star {
			constructor(minSz, maxSz, stepSz, interval, starsContainer) {
				this.minSz = minSz
				this.maxSz = maxSz
				this.stepSz = stepSz
				this.interval = interval
				this.currentSize = minSz
				this.starsContainer = starsContainer

				this.render()
				this.startGrow()
			}

			// функція створення рандомного кольору
			getRandomColor() {
				const r = Math.floor(Math.random() * 256)
				const g = Math.floor(Math.random() * 256)
				const b = Math.floor(Math.random() * 256)
				return `rgb(${r}, ${g}, ${b})`
			}

			// функція створення випадкової позиції
			getRandomPosition() {
				this.left = Math.random() * 100
				this.top = Math.random() * 100
			}

			// функція оновлення розміру
			updateSize() {
				// додаємо крок розміру до попереднього
				this.currentSize += this.stepSz
				// коли зірка досягає максимального розміру
				if (this.currentSize >= this.maxSz) {
					// викликаємо функцію переміщення
					this.updatePosition()
					// знову робимо мінімальний розмір
					this.currentSize = this.minSz
				}
				// встановлюємо нові розміри
				this.starElement.style.width = `${this.currentSize}px`
				this.starElement.style.height = `${this.currentSize}px`
			}

			// функція оновлення позиції
			updatePosition() {
				// викликаємо функцію створення рандомнох позиції
				this.getRandomPosition()
				// присвоюємо нові позиції
				this.starElement.style.left = `${this.left}%`
				this.starElement.style.top = `${this.top}%`
			}

			// функція, що починає "зростання" зірки
			startGrow() {
				// Випадкова затримка
				const delay = Math.random() * (this.interval * 100)
				// додаємо випадкову затримку, щоб зірки не одночасно починали рости
				setTimeout(() => {
					this.intervalId = setInterval(() => {
						this.updateSize()
					}, this.interval)
				}, delay)
			}

			// функція рендеру елемента зірки
			render() {
				// створюємо елемент
				const star = document.createElement("div")
				star.className = "star"
				// додаємо зірці випадкового кольору
				star.style.backgroundColor = this.getRandomColor()
				// позиціонуємо зірку
				star.style.position = "absolute"
				// викликаємо функцію створення рандомного позиціонування
				this.getRandomPosition()
				// присвоюємо стилями позицію left top
				star.style.left = `${this.left}%`
				star.style.top = `${this.top}%`
				// Присвоюємо мінімальні розміри 
				star.style.width = `${this.minSz}px`
				star.style.height = `${this.minSz}px`

				// запам'ятовуємо елемент зірки
				this.starElement = star
				// додаємо зірку у контейнер
				document.querySelector(this.starsContainer).append(star)
			}
		}

		// Крок 1. Обчислення результатів
		// крок 2. Виведення результатів

		// створюємо 200 екземплярів класу
		for (let i = 0; i < 200; i++) {
			new Star(0.5, 10, 0.5, 800, "#starsContainer")
		}
	}
}
