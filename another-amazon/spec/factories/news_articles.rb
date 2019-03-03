FactoryBot.define do
  factory :news_article do
    sequence(:title) { |n| Faker::MostInterestingManInTheWorld.quote + " #{n}" }
    description { Faker::Hacker.say_something_smart }
  end
end
