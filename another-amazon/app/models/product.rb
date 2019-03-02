class Product < ApplicationRecord
    validates :title, presence: true, uniqueness: { case_sensitive: false }
    validates :price, numericality: { greater_than: 0}
    validates :description, presence: true, length: { minimum: 10}

    before_validation :set_default_price
    before_save :capitalize_title

    scope :search, ->(query) {where("title ILIKE ? OR description ILIKE ?", "%#{query}%", "%#{query}%")}

    private

    def set_default_price
        self.price ||= 1
    end

    def capitalize_title
        self.title.capitalize!
    end
end
