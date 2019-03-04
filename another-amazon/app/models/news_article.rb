class NewsArticle < ApplicationRecord

    validates :title, presence: true, uniqueness: { case_sensitive: false}
    validates :description, presence: true
    validate :published_at_after_created_at

    before_validation :titleized_title

    def titleized_title
        self.title = self.title&.titleize
    end

    def publish
        update(published_at: Time.zone.now)
    end

    scope :published, -> { where( 'published_at > created_at' ) }
    # def self.published
    #     where( 'published_at > created_at' )
    # end

    private

    def published_at_after_created_at
        return unless published_at.present?
        errors.add(:published_at, "You cannot immediately publish this article") if published_at <= created_a
    end

end
